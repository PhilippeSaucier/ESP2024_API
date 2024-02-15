var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
// mongoose.connect(url);

var rapportShema = new mongoose.Schema({
    "NumeroDA": {
        "type": "Number"
    },
    "Rapport": {
        "type": ["String"]
    },
});

var mongooseRapport = mongoose.model("rapport", rapportShema);

module.exports = mongooseRapport;
