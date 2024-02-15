var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
// mongoose.connect(url);

var administrateurShema = new mongoose.Schema({
    "NumeroAdmin": {
        "type": "Number"
    },
    "Nom": {
        "type": "String"
    },
    "Prenom": {
        "type": "String"
    },
    "Email": {
        "type": "String"
    },
    "Password": {
        "type": "String"
    },
});

var mongooseAdministrateur = mongoose.model("administrateur", administrateurShema);

module.exports = mongooseAdministrateur;
