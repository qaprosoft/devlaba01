const fs = require('fs');
const nodePath = require('path');

class App {
  _routeList;
  _router;
  _http;
  _frontController;

  constructor(logger) {
    this._logger = logger;
  }

  init() {
    // get routeList
    this._routeList = fs
      .readdirSync(ROOT_PATH + '/routes')
      .map((fileName) => {
        if (/\.js$/.test(fileName)) {
          return require(nodePath.join(ROOT_PATH, 'routes', fileName));
        } else {
          return [];
        }
      })
      .flat(Infinity);

    // router
    this._router = new (require(nodePath.join(
      ROOT_PATH,
      'infrastructure',
      'Router',
    )))(this._routeList);

    // Front controller
    this._frontController = new (require(nodePath.join(
      ROOT_PATH,
      'infrastructure',
      'FrontController',
    )))(this._router);

    return this;
  }

  boot() {
    // http
    this._http = require('http').createServer(
      this._frontController.handle.bind(this._frontController),
    );

    return this;
  }

  start() {
    this._http.listen(
      process.env.PORT || 8080,
      process.env.HOST || 'localhost',
      () => {
        this._logger.info('App was successfully started');
      },
    );
  }

  get(ref) {
    if (ref === 'logger') {
      return this._logger;
    }
  }
}

module.exports = App;
