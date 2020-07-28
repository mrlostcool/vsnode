var express = require('express');
var router = express.Router();

var logincontroller = require('../controllers/logincontrole')

router.use(function timeLog(req, res, next) {
    console.log('login router: ', Date.now());
    next();
  });

router.get('/', logincontroller.index);



router.post('/', logincontroller.loginpost)

module.exports = router;
