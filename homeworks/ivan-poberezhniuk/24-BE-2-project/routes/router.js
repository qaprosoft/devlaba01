class Router {
  constructor() {
    this.getRequests = [];
  }

  get(route, controller) {
    this.getRequests.push({ route, controller });
  }

  init(req, res) {
    this.getRequests.forEach((request) => {
      if (request.route === req.url) {
        request.controller(req, res);
      }
    });
  }
}

module.exports = Router;
