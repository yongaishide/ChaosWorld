import gzip, io, struct, zipfile, sys

JAR = r"C:\Users\xuhuailei\curseforge\minecraft\Instances\Chaos_world\mods\aether-1.21.1-1.5.10-neoforge.jar"

def rd(buf, pos, n):
    return buf[pos:pos+n], pos+n

def parse_payload(buf, pos, t):
    if t == 1: v = struct.unpack('>b', buf[pos:pos+1])[0]; return v, pos+1
    if t == 2: v = struct.unpack('>h', buf[pos:pos+2])[0]; return v, pos+2
    if t == 3: v = struct.unpack('>i', buf[pos:pos+4])[0]; return v, pos+4
    if t == 4: v = struct.unpack('>q', buf[pos:pos+8])[0]; return v, pos+8
    if t == 5: v = struct.unpack('>f', buf[pos:pos+4])[0]; return v, pos+4
    if t == 6: v = struct.unpack('>d', buf[pos:pos+8])[0]; return v, pos+8
    if t == 7:
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        return list(buf[pos:pos+n]), pos+n
    if t == 8:
        n = struct.unpack('>h', buf[pos:pos+2])[0]; pos += 2
        return buf[pos:pos+n].decode('utf-8'), pos+n
    if t == 9:
        it = buf[pos]; pos += 1
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        out = []
        for _ in range(n):
            v, pos = parse_payload(buf, pos, it)
            out.append(v)
        return out, pos
    if t == 10:
        out = {}
        while True:
            ct = buf[pos]; pos += 1
            if ct == 0: break
            nlen = struct.unpack('>h', buf[pos:pos+2])[0]; pos += 2
            name = buf[pos:pos+nlen].decode('utf-8'); pos += nlen
            v, pos = parse_payload(buf, pos, ct)
            out[name] = v
        return out, pos
    if t == 11:
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        return [struct.unpack('>i', buf[pos+4*i:pos+4*i+4])[0] for i in range(n)], pos+4*n
    if t == 12:
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        return [struct.unpack('>q', buf[pos+8*i:pos+8*i+8])[0] for i in range(n)], pos+8*n
    raise ValueError('tag %d' % t)

def parse(raw):
    data = raw
    try:
        data = gzip.decompress(raw)
    except OSError:
        pass
    buf = data
    t = buf[0]; pos = 1
    nlen = struct.unpack('>h', buf[pos:pos+2])[0]; pos += 2 + nlen
    root, pos = parse_payload(buf, pos, t)
    return root

def analyze(z, name):
    e = z.getinfo(name)
    raw = z.read(e)
    root = parse(raw)
    pal = root['palette']
    names = [p['Name'] for p in pal]
    blocks = root['blocks']
    size = root.get('size')
    print('===', name.split('/')[-1], 'size=', size, 'palette entries=', len(names))
    glow = [i for i, n in enumerate(names) if n == 'minecraft:glowstone']
    water = [i for i, n in enumerate(names) if n == 'minecraft:water']
    portal = [i for i, n in enumerate(names) if 'aether_portal' in n]
    print('   glowstone idx', glow, 'water idx', water, 'portal idx', portal)
    gpos = [tuple(b['pos']) for b in blocks if b['state'] in glow]
    print('   glowstone count', len(gpos))
    if gpos:
        xs = [p[0] for p in gpos]; ys = [p[1] for p in gpos]; zs = [p[2] for p in gpos]
        print('   bbox x', min(xs), max(xs), 'y', min(ys), max(ys), 'z', min(zs), max(zs))
        # print cross-section that contains most glowstone: use z with max glowstone
        from collections import Counter
        cz = Counter(p[2] for p in gpos).most_common(1)[0][0]
        print('   layer z=', cz)
        grid = {}
        for (x, y, zz) in gpos:
            if zz == cz: grid[(x, y)] = '#'
        if grid:
            xs2 = range(min(x for x, y in grid), max(x for x, y in grid)+1)
            ys2 = range(min(y for x, y in grid), max(y for x, y in grid)+1)
            for y in ys2:
                line = ''.join(grid.get((x, y), '.') for x in xs2)
                print('     y=%3d |%s|' % (y, line))
    wpos = [tuple(b['pos']) for b in blocks if b['state'] in water]
    if wpos:
        ys = [p[1] for p in wpos]
        print('   water count', len(wpos), 'y range', min(ys), max(ys))

with zipfile.ZipFile(JAR) as z:
    names = [n for n in z.namelist() if n.startswith('data/aether/structure/ruined_portal/') and n.endswith('.nbt')]
    print('structure files:', len(names))
    for n in sorted(names)[:6]:
        try:
            analyze(z, n)
        except Exception as ex:
            print('ERR', n, ex)
