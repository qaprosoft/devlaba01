class WelcomeController {
  static async home(req, res) {
    res.end(`home reached`);
  }

  static async notFound(req, res) {
    let pageContent = await require('fs').promises.readFile(
      APP_PATH + '/views/404.html',
    );

    pageContent = pageContent.toString().trim();

    res.writeHead(404);
    res.end(pageContent);
    return;
  }
}

module.exports = WelcomeController;
