require('dotenv').config();
const path = require('path');
global.APP_PATH = path.resolve(__dirname);

// Logger
/** @type {ILogger} */
const logger = new (require(APP_PATH + '/infrastructure/ConsoleLogger'))();

const app = new (require(APP_PATH + '/infrastructure/App'))(logger);

module.exports = app;
