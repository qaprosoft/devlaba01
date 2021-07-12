const app = require('./bootstrap');

try {
  app.init().boot().start();
} catch (e) {
  app.get('logger').error(e);
}
