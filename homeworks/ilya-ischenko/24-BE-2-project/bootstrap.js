// .env
require('dotenv').config();

// path
const nodePath = require('path');
global.ROOT_PATH = nodePath.resolve(__dirname);
global.PUBLIC_PATH = nodePath.resolve(ROOT_PATH, 'public');

// Logger
const logger = new (require(nodePath.join(ROOT_PATH, 'infrastructure', 'ConsoleLogger')))();

// App
const App = new (require(nodePath.join(ROOT_PATH, './infrastructure/App')))(logger);

module.exports = App;
