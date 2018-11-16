var path = require('path');
var user = require('../models/user')

exports.index = function(req,res) {
    res.sendFile(path.join(__dirname, '../views/login.html'))
};

exports.loginpost = function(req,res) {
    //console.log(req.body.username);
    console.log(req.body.password);
    
    user.getbyname(req.body.username,function(result) {
        //console.log(result);
        if (result.length == 0) {
            console.log("empty reuslt")
        }
        else {
            console.log(result[0].password);
        }
        
    });
    console.log("query end");
    res.send('post login page');
};