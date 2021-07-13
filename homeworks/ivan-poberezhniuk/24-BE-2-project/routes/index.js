const Router = require('./router');

const router = new Router();

router.get('/', (req, res) => {
  res.statusCode = '404';
  res.end('HOME PAGE');
});

router.get('/default', (req, res) => {
  res.statusCode = '404';
  res.end('404');
  const responseBody = {
    error: 'Route … not found',
  };
});

module.exports = router;
