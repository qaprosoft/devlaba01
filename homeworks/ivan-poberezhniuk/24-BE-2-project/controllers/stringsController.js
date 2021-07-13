const http = require('http');

exports.search_substring = async (req, res) => {
  let rawData = '';
  req.on('data', (chunk) => {
    rawData += chunk;
  });

  req.on('end', () => {
    const data = JSON.parse(rawData);
    const { string, substring } = { ...data };

    const contain = string.indexOf(substring);
    if (contain) {
      res.end(contain.toString());
    } else {
      res.end('false');
    }
  });
};

exports.reverse = async (req, res) => {
  let rawData = '';
  req.on('data', (chunk) => {
    rawData += chunk;
  });

  req.on('end', () => {
    const { string } = JSON.parse(rawData);
    console.log(string);
    res.end(string.split('').reverse().join(''));
  });
};
