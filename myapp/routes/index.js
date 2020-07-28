var express = require('express');
var router = express.Router();



router.use(function timeLog(req, res, next) {
  console.log('index router: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    console.log(req.session)
    res.render('index', { title: 'Express' });
  }
  else {
    res.redirect('/login')
  }
})



module.exports = router;
