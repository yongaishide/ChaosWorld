import gzip, io, struct, zipfile
from collections import Counter

JAR = r"C:\Users\xuhuailei\curseforge\minecraft\Instances\Chaos_world\mods\aether-1.21.1-1.5.10-neoforge.jar"

def parse_payload(buf, pos, t):
    if t == 1: return struct.unpack('>b', buf[pos:pos+1])[0], pos+1
    if t == 2: return struct.unpack('>h', buf[pos:pos+2])[0], pos+2
    if t == 3: return struct.unpack('>i', buf[pos:pos+4])[0], pos+4
    if t == 4: return struct.unpack('>q', buf[pos:pos+8])[0], pos+8
    if t == 5: return struct.unpack('>f', buf[pos:pos+4])[0], pos+4
    if t == 6: return struct.unpack('>d', buf[pos:pos+8])[0], pos+8
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
            v, pos = parse_payload(buf, pos, it); out.append(v)
        return out, pos
    if t == 10:
        out = {}
        while True:
            ct = buf[pos]; pos += 1
            if ct == 0: break
            nl = struct.unpack('>h', buf[pos:pos+2])[0]; pos += 2
            name = buf[pos:pos+nl].decode('utf-8'); pos += nl
            v, pos = parse_payload(buf, pos, ct); out[name] = v
        return out, pos
    if t == 11:
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        return [struct.unpack('>i', buf[pos+4*i:pos+4*i+4])[0] for i in range(n)], pos+4*n
    if t == 12:
        n = struct.unpack('>i', buf[pos:pos+4])[0]; pos += 4
        return [struct.unpack('>q', buf[pos+8*i:pos+8*i+8])[0] for i in range(n)], pos+8*n
    raise ValueError(t)

def load(raw):
    data = raw
    try: data = gzip.decompress(raw)
    except OSError: pass
    pos = 1
    nl = struct.unpack('>h', data[pos:pos+2])[0]; pos += 2 + nl
    return parse_payload(data, pos, data[0])[0]

with zipfile.ZipFile(JAR) as z:
    names = sorted(n for n in z.namelist() if n.startswith('data/aether/structure/ruined_portal/') and n.endswith('.nbt'))
    for n in names:
        try:
            root = load(z.read(n))
        except Exception as e:
            print(n, 'ERR', e); continue
        pal = [p['Name'] for p in root['palette']]
        gi = [i for i, p in enumerate(pal) if p == 'minecraft:glowstone']
        blocks = root['blocks']
        g = [tuple(b['pos']) for b in blocks if b['state'] in gi]
        if not g:
            print('%-16s no glowstone' % n.split('/')[-1]); continue
        xs = [p[0] for p in g]; ys = [p[1] for p in g]; zs = [p[2] for p in g]
        w = max(xs)-min(xs)+1; h = max(ys)-min(ys)+1
        cz = Counter(p[2] for p in g).most_common(1)[0][0]
        lay = {(p[0], p[1]) for p in g if p[2] == cz}
        lx = sorted({x for x, y in lay}); ly = sorted({y for x, y in lay})
        lw = lx[-1]-lx[0]+1; lh = ly[-1]-ly[0]+1
        per = 2*lw + 2*lh - 4
        complete = (len(lay) == per)
        print('%-16s total=%2d bbox=%dx%d layer n=%2d bbox=%dx%d perimeter=%d %s'
              % (n.split('/')[-1], len(g), w, h, len(lay), lw, lh, per, 'COMPLETE-RING' if complete else ''))
