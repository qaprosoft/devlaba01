const http = require('http')
const fs = require('fs')
const { URL } = require('url')

if (fs.existsSync('./.env')) {
  process.env.PORT = (fs.readFileSync('./.env')).toString().split(':')[1].trim()
}

const PORT = process.env.PORT || 3000

const server = http.createServer(  (req, res) => {
  const path = new URL(req.url, `http://${req.headers.host}`)

  if (path.pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const stream = fs.createReadStream(__dirname + '/index.html')
    stream.pipe(res)
  } else if (path.pathname === '/assets/main.js') {
    res.writeHead(200, {'Content-Type': 'text/js'});
    const stream = fs.createReadStream(__dirname + '/assets/main.js')
    stream.pipe(res)
  } else if (path.pathname === '/assets/main.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    const stream = fs.createReadStream(__dirname + '/assets/main.css')
    stream.pipe(res)
  } else {
    res.writeHead(404, {})
    res.end("page not found")
  }
});

server.listen( PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
})
