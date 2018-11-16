

var mysql = require('mysql');
var mysqlcnf = require('../conf/mysqlconf')

var pool = mysql.createPool(mysqlcnf.mysql)

 var db = {};

//插入操作，注意使用异步返回查询结果
/*
db.insert = function (connection, sql, paras, callback) {
    connection.query(sql, paras, function (error, results, fields) {
        if (error) throw error;
        callback(results.insertId);//返回插入的id
    });
}
*/
db.query = function(sql,param,callback) {
    pool.query(sql,param,function (err,result) {
        if (err) {
            console.log("select err:",err.message);
            throw err;
        }
        callback(result);
    });
}


module.exports = db;