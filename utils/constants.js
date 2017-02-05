var cons = {};

cons.DBName = "patientsDB";
cons.UserCollection = "users";
cons.host = "localhost";
cons.port = 27017;

/**
 * @return {string}
 */
cons.DBUrl = function (dbName) {

    return ("mongodb://" + cons.host + ":" + cons.port + "/" + dbName);

};

module.exports = cons;