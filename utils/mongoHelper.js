var mongoClient = require("./mongoClient");
var cons = require("./constants");

var mongoHelper = {};

// mongoHelper.addUser = function (dbName, collName, userName, userId, userPassword, callback) {
//     var mongoObj = {};
//     mongoObj._id = userId;
//     mongoObj.userId = userId;
//     mongoObj.userName = userName;
//     mongoObj.userPasswrd = userPassword;
//     mongoClient.insertInDB(dbName, collName, mongoObj, callback);
// };
//
// mongoHelper.findUser = function (dbName, collName, userId, callback) {
//     var mongoObj = {};
//     mongoObj.userId = userId;
//     mongoClient.findInDB(dbName, collName, mongoObj, 0, 100, callback);
// };

mongoHelper.addItem = function (dbName, collName, dto, callback) {
    console.log("came to mongoHelper");
    var obj=dto;
    console.log(obj);
    mongoClient.insertInDB(dbName, collName, dto, callback);

};

//
mongoHelper.getItem = function (dbName, collName, callback) {
    mongoClient.getFromDB(dbName, collName, callback);
};
//
// mongoHelper.getItem = function (dbName, collName, dto, updateObj, callback) {
//     mongoClient.getFromDB(dbName, collName, dto, updateObj, false, callback);
// };
//
// mongoHelper.deleteItem = function (dbName, collName, dto, callback) {
//     mongoClient.deleteInDB(dbName, collName, dto, callback);
// };

module.exports = mongoHelper;