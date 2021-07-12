const nodePath = require('path');
const fs = require('fs');

class ReverseController {
  static reverse(req, res) {
    fs.createReadStream(
      nodePath.join(PUBLIC_PATH, 'views', 'reverse.html'),
    ).pipe(res);
  }

  static getReverseString(req, res) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const { string } = JSON.parse(body);
        const result = string.split('').reverse().join('');

        res.writeHead(200);
        res.end(JSON.stringify({ result }));
      } catch (e) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'smth went wrong' }));
      }
    });
  }
}

module.exports = ReverseController;
