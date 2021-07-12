const fs = require('fs');
class App {
  _routeList;
  _router;
  _http;
  _frontController;

  constructor(logger) {
    this._logger = logger;
  }

  init() {
    //routeList
    this._routeList = fs
      .readdirSync(APP_PATH + '/routes')
      .map((fileName) => {
        if (!/\.js$/.test(fileName)) {
          return [];
        }
        return require(APP_PATH + '/routes/' + fileName);
      })
      .flat(Infinity);

    //router
    this._router = new (require(APP_PATH + '/infrastructure/Router'))(
      this._routeList,
    );

    //front controller
    this._frontController = new (require(APP_PATH +
      '/infrastructure/FrontController'))(this._router);

    return this;
  }

  boot() {
    this._router.set(
      process.env.DEFAULT_HANDLER,
      this._router.resolve('get **404'),
    );

    this._http = require('http').createServer(
      this._frontController.handle.bind(this._frontController),
    );
    return this;
  }

  start() {
    //http listen
    this._http.listen(process.env.PORT || 7000, process.env.HOST, () => {
      this._logger.info(`Server start on PORT=${process.env.PORT}`);
    });
  }

  get(reference) {
    if ('logger' === reference) {
      return this._logger;
    }
  }
}

module.exports = App;
