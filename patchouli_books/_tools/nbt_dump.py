import gzip, struct, sys, zipfile, json, collections

def read_nbt(data):
    pos = 0
    def u(fmt, n):
        nonlocal pos
        v = struct.unpack_from(fmt, data, pos)[0]
        pos += n
        return v
    def string():
        nonlocal pos
        l = struct.unpack_from('>H', data, pos)[0]; pos += 2
        s = data[pos:pos+l].decode('utf-8'); pos += l
        return s
    def payload(tag):
        nonlocal pos
        if tag == 0: return None
        if tag == 1: return u('>b', 1)
        if tag == 2: return u('>h', 2)
        if tag == 3: return u('>i', 4)
        if tag == 4: return u('>q', 8)
        if tag == 5: return u('>f', 4)
        if tag == 6: return u('>d', 8)
        if tag == 7:
            l = u('>i', 4); v = data[pos:pos+l]; pos += l; return v
        if tag == 8: return string()
        if tag == 9:
            it = data[pos]; pos += 1
            l = u('>i', 4)
            return [payload(it) for _ in range(l)]
        if tag == 10:
            d = collections.OrderedDict()
            while True:
                t = data[pos]; pos += 1
                if t == 0: break
                name = string()
                d[name] = payload(t)
            return d
        if tag == 11:
            l = u('>i', 4); return [u('>i', 4) for _ in range(l)]
        if tag == 12:
            l = u('>i', 4); return [u('>q', 8) for _ in range(l)]
        raise ValueError('tag %d' % tag)
    t = data[pos]; pos += 1
    name = string()
    return payload(t)

def load(path, entry):
    z = zipfile.ZipFile(path)
    raw = z.read(entry)
    if raw[:2] == b'\x1f\x8b':
        raw = gzip.decompress(raw)
    return read_nbt(raw)

def dump(path, entry):
    root = load(path, entry)
    print('==', entry, 'size=', root.get('size'), 'DataVersion=', root.get('DataVersion'))
    pal = root.get('palette')
    for i, p in enumerate(pal):
        print('  pal[%d] %s %s' % (i, p.get('Name'), p.get('Properties') or ''))
    blocks = root.get('blocks') or []
    byname = collections.defaultdict(list)
    for b in blocks:
        nm = pal[b['state']].get('Name')
        byname[nm].append(tuple(b['pos']))
    for nm, ps in byname.items():
        print('  %s x%d  %s' % (nm, len(ps), sorted(ps)))
    ents = root.get('entities') or []
    print('  entities:', [e.get('nbt', {}).get('id') for e in ents])
    return root

if __name__ == '__main__':
    dump(sys.argv[1], sys.argv[2])
