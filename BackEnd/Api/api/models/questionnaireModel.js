var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
// mongoose.connect(url);

var questionnaireShema = new mongoose.Schema({
    "NumeroDA": {
        "type": "Number"
    },
    "NombreVrai": {
        "type": "Number"
    },
    "NombreFaux": {
        "type": "Number"
    },
});

var mongooseQuestionnaire = mongoose.model("questionnaire", questionnaireShema);

module.exports = mongooseQuestionnaire;
