const Router = require('./router');
const server = require('../controllers/serverController');
const router = new Router();

router.get('/server/name', server.getServerName);

module.exports = router;
