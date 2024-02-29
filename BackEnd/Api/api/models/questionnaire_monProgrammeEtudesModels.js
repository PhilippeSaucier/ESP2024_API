var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
mongoose.connect(url);

var questionnaire_monProgrammeEtudesShema = new mongoose.Schema({
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
    "questionsProgrammeEtudes": [
        {
            "type": {
                "type": "String"
            },
            "id": {
                "type": "String"
            },
            "titre": {
                "type": "String"
            },
            "sousTitre": {
                "type": "String"
            },
            "questions": {
                "id":{
                    "type": "String"
                },
                "enonce": {
                    "type": "String"
                },
            }
        }
    ]
});

var mongooseQuestionnaire_monProgrammeEtudes = mongoose.model("questionnaire_monProgrammeEtudes", questionnaire_monProgrammeEtudesShema);

module.exports = mongooseQuestionnaire_monProgrammeEtudes;
