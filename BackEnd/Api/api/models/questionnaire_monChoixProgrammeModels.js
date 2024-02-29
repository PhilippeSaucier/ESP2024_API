var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
mongoose.connect(url);

var questionnaire_monChoixProgrammeShema = new mongoose.Schema({
    "titre": {
        "type": "String"
    },
    "directive": {
        "titre": {
            "type": "String"
        },
        "objectifs": {
            "type": ["String"]
        }
    },
    "piedPage": {
        "type": "String"
    },
    "questions": [
        {
            "facteur": {
                "type": "String"
            },
            "questions": {
                "type": ["String"]
            }
        }
    ]
});

var mongooseQuestionnaire_monChoixProgramme = mongoose.model("questionnaire_monChoixProgramme", questionnaire_monChoixProgrammeShema);

module.exports = mongooseQuestionnaire_monChoixProgramme;
