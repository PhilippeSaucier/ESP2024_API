var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
// mongoose.connect(url);

var facteurShema = new mongoose.Schema({
    "Facteur": {
        "type": "String"
    },
    "QuestionsFacteur": {
        "type": ["String"]
    },
});

var mongooseFacteur = mongoose.model("facteur", facteurShema);

module.exports = mongooseFacteur;
