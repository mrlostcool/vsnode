var path = require('path');
var user = require('../models/user')

exports.index = function(req,res) {
    //res.sendFile(path.join(__dirname, '../views/login.html'))
    //res.set('charset', 'utf8');
    //res.set("Content-type:application/pdf");
    //res.set("Content-Disposition:attachment;filename='downloaded.pdf'");
    //res.end('ok')
    //res.header("Content-type","application/pdf");
    //res.header("Content-Disposition","attachment;filename='downloaded.pdf'");
    res.render('login');
    //res.send('success');
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
                res.send('invalid password');
            }
            else {
                req.session.username = req.body.username
                res.send('success');
                //res.redirect('/');
            }
        }
        
    });
};