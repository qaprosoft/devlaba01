const Router = require('./router');
const numbers = require('../controllers/numbersController');
const router = new Router();

router.get('/numbers/sum', numbers.sum);

module.exports = router;
