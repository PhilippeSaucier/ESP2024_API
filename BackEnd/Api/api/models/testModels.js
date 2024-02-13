var MongoClient = require('mongodb').MongoClient;
var dbname = global.gConfig.database;
var url = global.gConfig.databaseUrl + dbname;

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
