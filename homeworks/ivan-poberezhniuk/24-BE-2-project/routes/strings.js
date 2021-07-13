const Router = require('./router');
const strings = require('../controllers/stringsController');

const router = new Router();

router.get('/strings/search-substring', strings.search_substring);
router.get('/strings/reverse', strings.reverse);

module.exports = router;
