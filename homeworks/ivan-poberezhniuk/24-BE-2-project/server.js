const http = require('http');
const numbersRouter = require('./routes/numbers');
const stringsRouter = require('./routes/strings');
const defaultRouter = require('./routes/index');
const serverRouter = require('./routes/server');

require('dotenv').config();

const HOSTNAME = process.env.HOST_NAME;
const PORT = process.env.PORT || 5000;

const MAIN_ROUTES = {
  STRINGS: 'strings',
  NUMBERS: 'numbers',
  SERVER: 'server',
};

const server = http.createServer(async (req, res) => {
  const mainRoute = req.url.split('/')[1];
  switch (mainRoute) {
    case MAIN_ROUTES.NUMBERS:
      numbersRouter.init(req, res);
      break;
    case MAIN_ROUTES.STRINGS:
      stringsRouter.init(req, res);
      break;
    case MAIN_ROUTES.HOME:
      stringsRouter.init(req, res);
      break;
    case MAIN_ROUTES.SERVER:
      serverRouter.init(req, res);
      break;
    default:
      defaultRouter.init(req, res);
      break;
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
