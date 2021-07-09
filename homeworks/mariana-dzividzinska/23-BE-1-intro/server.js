const http = require('http');
const fs = require('fs');

const envRS = fs.readFileSync('.env', 'utf-8');
let envs = (() => {
  const lineArrs = envRS.split('\r\n');
  return lineArrs.reduce((acc, el) => {
    const line = el.split('=');
    acc[(line[0])] = line[1];
    return acc;
  }, {});
})();

http.createServer((req, res) => {
  if (req.url === '/') {
    fs.createReadStream('./index.html').pipe(res);
  }
  else if (req.url === '/assets/main.css') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    fs.createReadStream(__dirname  + '/assets/main.css').pipe(res);
  }
  else if (req.url === '/assets/main.js') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/js');
    fs.createReadStream(__dirname  + '/assets/main.js').pipe(res);
  }
  else {
    res.statusCode = 404;
    res.end('404! Page not found');
  }
}).listen(envs.PORT, function () {
    console.log(`Server started at ${envs.PORT}`);
});