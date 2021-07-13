const { fork } = require('child_process');
const logger = require('../logger');

exports.getServerName = async (req, res) => {
  try {
    const compute = fork('controllers/compute.js');
    compute.send('start');
    compute.on('message', (sum) => {
      res.end(`Sum is ${sum}`);
    });
  } catch (error) {
    logger.logger(error);
  }
};
