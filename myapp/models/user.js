var db = require('./db');

var usersqlmap = {
    getbyname:'select * from users where username=?',
};


var user = {};

user.getbyname = function(name,callback){
    db.query(usersqlmap.getbyname,name,callback)
}


module.exports = user;
