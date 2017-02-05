var mongoClient = require("./mongoClient");
var cons = require("./constants");

var mongoHelper = {};

mongoHelper.addItem = function (dbName, collName, dto, callback) {
    console.log("came to mongoHelper");
    var obj=dto;
    console.log(obj);
    mongoClient.insertInDB(dbName, collName, dto, callback);

};

mongoHelper.getItem = function (dbName, collName, callback) {
    mongoClient.getFromDB(dbName, collName, callback);
};

mongoHelper.deleteItem = function (dbName, collName, dto, callback) {
    var obj=dto;
    console.log("object in helper"+ dto);
    console.log(obj);
    mongoClient.deleteInDB(dbName, collName, dto, callback);
};

module.exports = mongoHelper;