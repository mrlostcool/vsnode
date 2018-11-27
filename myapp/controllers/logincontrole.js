var path = require('path');
var user = require('../models/user')

exports.index = function(req,res) {
    //res.sendFile(path.join(__dirname, '../views/login.html'))
    res.render('login');
};

exports.loginpost = function(req,res) {
    if (req.body.username == '' || req.body.password == ''){
        //res.render('error');
        res.send('empty username or password');
        return;
    }
    user.getbyname(req.body.username,function(result) {
        console.log(req.body.username);
        if (result.length == 0) {
            res.send('invalid username');
            return;
        }
        else {
            console.log(result[0].password);
            if (result[0].password != req.body.password) {
                res.send('invalid username');
            }
            else {
                req.session.username = req.body.username
                res.redirect('/')
            }
        }
        
    });
};