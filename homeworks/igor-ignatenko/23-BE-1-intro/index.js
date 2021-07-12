const http = require('http');
const fs = require('fs');
const { URL } = require('url')
const port = fs.readFileSync('port.env', 'utf8', (err, data) => +data);
process.env.PORT = port;

const server = http.createServer((req, res) => {
  let path = new URL(req.url, `http://${req.headers.host}`)
    .pathname.replace(/^\/+|\/+$/g, '');

  if (path === '') {
    path = './assets/page.html'
  }

  fs.readFile(path, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    }
    if (path.endsWith('.css')) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
    } else if (path.endsWith('.js')) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
    } else if (path.endsWith('.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }

    res.end(data);

  })
})

server.listen(process.env.PORT || 8000, 'localhost', () => {
  console.log('Loading.....');
})