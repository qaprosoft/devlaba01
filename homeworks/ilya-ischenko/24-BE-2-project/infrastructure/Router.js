const nodePath = require('path');

class Router {
  _handlers = {};

  constructor(routeList) {
    this._parse(routeList);
  }

  _parse(routeList) {
    routeList.forEach((route) => {
      const sign = this.makeSign(route.method, route.path);

      const controller = require(nodePath.join(
        ROOT_PATH,
        'http/controllers',
        route.resolver.controller,
      ));
      if (typeof controller[route.resolver.action] !== 'function') {
        throw new Error('No action for this route');
      }

      this._handlers[sign] = controller[route.resolver.action];
    });
  }

  resolve(sign) {
    return this._handlers[sign] || null;
  }

  makeSign(method, path) {
    return `${method.toLowerCase()} ${path}`;
  }
}

module.exports = Router;
