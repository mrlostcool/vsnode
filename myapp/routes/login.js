var express = require('express');
var router = express.Router();

var db = require('../models/db')
var logincontroller = require('../controllers/logincontrole')

router.get('/', logincontroller.index);

router.post('/', logincontroller.loginpost)

module.exports = router;
