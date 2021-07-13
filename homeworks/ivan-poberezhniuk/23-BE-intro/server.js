const http = require('http');
const fs = require('fs');
const url = require('url');

const data = fs.readFileSync('./.env');
const rows = data.toString().split('\n');

rows.forEach((row) => {
  const [name, value] = row.split('=');
  process.env[name] = value;
});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const PATH = {
  HOME: '/',
  STYLES: 'styles',
  JS: 'js',
};

const server = http.createServer(async (req, res) => {
  const path = req.url.split('/');
  if (PATH.HOME === req.url) {
    try {
      fs.readFile('./1-cv/index.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
      });
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } finally {
      return;
    }
  }

  if (PATH.STYLES === path[1]) {
    try {
      fs.readFile(`./1-cv/styles/${path[path.length - 1]}`, (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.write(data);
        res.end();
      });
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
      return;
    } finally {
      return;
    }
  }
  if (PATH.JS === path[1]) {
    try {
      fs.readFile(`./1-cv/${req.url}`, (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/js');
        res.write(data);
        res.end();
      });
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
      return;
    } finally {
      return;
    }
  }

  res.statusCode = 404;
  res.end('ПАГЕ НОТ ФАУНД');
  return;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
