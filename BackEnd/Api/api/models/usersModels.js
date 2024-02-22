var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
mongoose.connect(url);

var usersShema = new mongoose.Schema({
    "userId": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "password": {
        "type": "String"
    },
    "nom": {
        "type": "String"
    },
    "prenom": {
        "type": "String"
    },
    "questionnaires": {
        "monProgrammeEtudes": [
            {
                "facteur": {
                    "type": "String"
                },
                "reponse": [{
                    "enonce": {
                        "type": "String"
                    },
                    "reponse": {
                        "type": "String"
                    }
                }]
            }
        ],
        "monChoixProgramme": [
            {
                "facteur": {
                    "type": "String"
                },
                "reponsePositives": {
                    "type": ["String"]
                },
                "reponseNegatives": {
                    "type": ["String"]
                }
            }
        ],
        "moyensPourReussir": [
            {
                "facteur": {
                    "type": "String"
                },
                "actionsReponses": {
                    "type": ["String"]
                },
                "ressourcesReponses": {
                    "type": ["String"]
                }
            }
        ],
    }
});

var mongooseUsers = mongoose.model("users", usersShema);

module.exports = mongooseUsers;
