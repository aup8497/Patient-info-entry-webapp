/**
 * Created by akshayuprabhu on 3/2/17.
 */
var mongoHelper = require('../utils/mongoHelper');
var cons = require('../utils/constants');

var express = require('express');
var router = express.Router();

router.route('/save')
    .post(function (req, res, next) {

        var dataOfPatients = {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'age': req.body.age,
            'dob': req.body.dob,
            'gender': req.body.gender,
            'phone': req.body.phone,
            'otherInfo':req.body.info

        };

        //here mongoHelper is an interface between mongoClient and http requests to make it simpler and more readable
        mongoHelper.addItem(cons.DBName, cons.UserCollection, dataOfPatients , function (err, results) {
            if(err){
                res.status(500).json("Error in saving data");
            }else{
                res.status(200).json("Successfully saved");
            }
        });
    });


router.route('/get')
    .get(function (req, res, next) {

        mongoHelper.getItem(cons.DBName, cons.UserCollection, function (err, results) {
            if(!err){
                res.status(200).json(results);
            } else{
                res.status(500).json("Error while Getting the data");
            }
        });
    });

module.exports = router;