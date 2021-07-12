class HomeworkController {
  static async sum(req, res) {
    if (!req.urlInfo.search) {
      res.end(JSON.stringify({ message: 'Enter numbers' }));
      return;
    } else {
      const params = req.urlInfo.searchParams;
      const num1 = params.get('num1') || null;
      const num2 = params.get('num2') || null;

      if (!num1 || !num2) {
        res.writeHead(400);
        res.end(
          JSON.stringify({
            error: { msg: 'Not enough numbers for operations' },
          }),
        );
        return;
      }

      const sumOfNumbers = Number(num1) + Number(num2);

      const readyObject = {
        num1: +num1,
        num2: +num2,
        sum: sumOfNumbers,
      };

      res.writeHead(200);
      res.end(JSON.stringify(readyObject));
      return;
    }
  }

  static async substr(req, res) {
    if (!req.urlInfo.search) {
      res.end(JSON.stringify({ message: 'Enter string and another params' }));
      return;
    } else {
      console.log(req.urlInfo);

      const params = req.urlInfo.searchParams;
      const string = params.get('str');
      const startIndex = params.get('start');
      const length = params.get('length');

      if (!string || !startIndex || !length) {
        res.writeHead(400);
        res.end(
          JSON.stringify({
            error: { msg: 'Not enough params' },
          }),
        );
      }

      const substring = string.slice(+startIndex, +length + 1);

      const readyObject = {
        word: string,
        startIndex: startIndex,
        length: length,
        substring: substring,
      };

      res.writeHead(200);
      res.end(JSON.stringify(readyObject));
      return;
    }
  }

  static async reverse(req, res) {
    if (!req.urlInfo.search) {
      res.end(JSON.stringify({ message: 'Enter string' }));
      return;
    } else {
      const params = req.urlInfo.searchParams;

      const string = params.get('string');

      if ('string' !== typeof string) {
        res.writeHead(409);
        res.end(
          JSON.stringify({
            error: { msg: 'Invalid string' },
          }),
        );
      }

      const reverseStr = string.split('').reverse().join('');

      const readyObject = {
        string: string,
        reverse: reverseStr,
      };

      res.writeHead(200);
      res.end(JSON.stringify(readyObject));
      return;
    }
  }
}

module.exports = HomeworkController;
