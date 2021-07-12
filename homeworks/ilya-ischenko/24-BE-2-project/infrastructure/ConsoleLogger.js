const ILogger = require('./interface/Iloger');

/**
 *  @implements {ILogger}
 */
class ConsoleLogger extends ILogger {
  error(...args) {
    console.error(...args);
  }

  info(...args) {
    console.info(...args);
  }
}

module.exports = ConsoleLogger;
