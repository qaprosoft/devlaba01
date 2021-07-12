class FrontController {
  constructor(router) {
    this._router = router;
  }

  async handle(req, res) {
    const urlInfo = new (require('url').URL)(
      req.url,
      `http://${req.headers.host}`,
    );
    const sign = this._router.makeSign(req.method, urlInfo.pathname);

    const handler = this._router.resolve(sign);

    if (typeof handler !== 'function') {
      const errorJson = JSON.stringify({ Error: `Route ${req.url} not found` });

      res.writeHead(404);
      res.end(errorJson);

      return;
    }

    req.urlInfo = urlInfo;
    const result = handler(req, res);
    if (result instanceof Promise) {
      await result;
    }
  }
}

module.exports = FrontController;
