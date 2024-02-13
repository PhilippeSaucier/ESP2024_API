var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
///var url = global.gConfig.databaseUrl + dbname;

var url = mongodb+srv://admin:wL1ei3q497OC2G08@dbaas-db-7021846-7cd44e03.mongo.ondigitalocean.com/testesp?tls=true&authSource=admin&replicaSet=dbaas-db-7021846;

var mongoose = require("mongoose");
mongoose.connect(url);

var messageShema = new mongoose.Schema({
    "id": {
        "type": "Number"
    },
    "message": {
        "type": "String"
    }
});

var mongooseTest = mongoose.model("message", messageShema);

module.exports = mongooseTest;
