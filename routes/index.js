var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dapp', function(req, res, next) {
  res.render('dapp', { title: 'Express' });
});
module.exports = router;
