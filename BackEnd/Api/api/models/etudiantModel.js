var MongoClient = require('mongodb').MongoClient;

var url = global.gConfig.databaseUrl;

var mongoose = require("mongoose");
// mongoose.connect(url);

var etudiantShema = new mongoose.Schema({
    "NumeroDA": {
        "type": "Number"
    },
    "NomEtudiant": {
        "type": "String"
    },
    "PrenomEtudiant": {
        "type": "String"
    },
    "EmailEtudiant": {
        "type": "String"
    },
    "PasswordEtudiant": {
        "type": "String"
    },
    "QuestionnaireFait": {
        "type": "Boolean"
    },
});

var mongooseEtudiant = mongoose.model("etudiant", etudiantShema);

module.exports = mongooseEtudiant;
