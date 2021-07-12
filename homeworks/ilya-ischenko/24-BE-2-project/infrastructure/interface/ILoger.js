class ILogger {
  info(...args) {
    throw new Error('You must implement it');
  }

  error(...args) {
    throw new Error('You must implement it');
  }
}

module.exports = ILogger;
