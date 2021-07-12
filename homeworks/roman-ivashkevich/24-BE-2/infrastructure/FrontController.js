class FrontController {
  /**
   *
   * @param {Router} router
   */

  constructor(router) {
    /**
     * @type {Router}
     * @private
     */
    this._router = router;
  }

  async handle(req, res) {
    const urlInfo = new (require('url').URL)(
      req.url,
      `http://${req.headers.host}`,
    );
    const sign = this._router.makeSign(req.method, urlInfo.pathname);

    let handler =
      this._router.resolve(sign) ||
      this._router.resolve(process.env.DEFAULT_HANDLER);

    if (typeof handler !== 'function') {
      res.writeHead(404);
      res.end('NOT FOUND');
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
