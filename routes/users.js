var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the users page');
});

/* GET users/cool listing. */
router.get('/cool', function(req, res, next) {
  res.send('It\'s so cool!');
});
module.exports = router;
