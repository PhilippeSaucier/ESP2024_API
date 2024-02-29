var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
mongoose.connect(url);

var questionnaire_moyensPourReussirShema = new mongoose.Schema({
    "titre": {
        "type": "String"
    },
    "instruction": {
        "type": "String"
    },
    "piedPage": {
        "type": "String"
    },
    "questionsMoyensReussite":[
        {
            "facteur": {
                "type": "String"
            },
            "titre": {
                "type": "String"
            },
            "sousTitre": {
                "type": "String"
            },
            "actions": {
                "type": ["String"]
            },
            "ressources": {
                "type": ["String"]
            }
        }
    ]
});

var mongooseQuestionnaire_moyensPourReussir = mongoose.model("questionnaire_moyensPourReussir", questionnaire_moyensPourReussirShema);

module.exports = mongooseQuestionnaire_moyensPourReussir;
