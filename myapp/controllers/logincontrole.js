var path = require('path');
var db = require('../models/db');

exports.index = function(req,res) {
    res.sendFile(path.join(__dirname, '../views/login.html'))
};

exports.loginpost = function(req,res) {
    console.log(req.body.username);
    console.log(req.body.password);
    let connection = db.connection();
    let sql = "select * from users where username='"+req.body.username+"'";
    console.log(sql);
    db.query(connection,sql,function(result) {
        console.log(result);
    });
    console.log("query end");
    db.close(connection);
    res.send('post login page');
};