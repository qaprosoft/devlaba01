const path = require('path');

function logger(msg = null) {
  let caller = path.basename(module.parent.filename);

  console.log('\x1b[33m%s\x1b[0m', `Called from: /${caller}`);
  console.log('\x1b[33m%s\x1b[0m', `Caller:`, logger.caller.toString());
  msg && console.log('\x1b[35m%s\x1b[0m', `Message:`, msg, '\n');
}

module.exports = { logger };
