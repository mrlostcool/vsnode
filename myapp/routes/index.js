var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/login',function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});


module.exports = router;
