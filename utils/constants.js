var cons = {};

// initializing all the constants ,so that it will be use full to change the program accordingly if needed.
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