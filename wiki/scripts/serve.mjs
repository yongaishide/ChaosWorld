// 极简静态服务器：把 .vitepress/dist 直接跑起来，不依赖 esbuild / 不启子进程。
// 用法：node scripts/serve.mjs [port]   默认 4174
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..', '.vitepress', 'dist')
const port = Number(process.argv[2] || 4174)
const host = '127.0.0.1'

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.json': 'application/json; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
}

if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error(`[serve] 找不到构建产物：${root}`)
  console.error('[serve] 先执行 pnpm docs:build')
  process.exit(1)
}

http
  .createServer((req, res) => {
    let pathname
    try {
      pathname = decodeURIComponent(url.parse(req.url).pathname)
    } catch {
      res.writeHead(400).end('bad request')
      return
    }
    const candidates = [pathname, pathname + '.html', path.join(pathname, 'index.html')]
    for (const candidate of candidates) {
      const file = path.join(root, candidate)
      if (!file.startsWith(root)) break // 防目录穿越
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' })
        fs.createReadStream(file).pipe(res)
        return
      }
    }
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    fs.createReadStream(path.join(root, '404.html')).pipe(res)
  })
  .listen(port, host, () => {
    console.log(`[serve] ChaosWorld 指南: http://${host}:${port}/`)
    console.log(`[serve] 根目录: ${root}`)
  })
