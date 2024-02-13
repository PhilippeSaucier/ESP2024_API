const config = require('./config.json');
const environmentConfig = config['development'];
global.gConfig = environmentConfig;
var port = global.gConfig.node_port;

// const verifyToken = require("./api/middleware/auth");

const cors = require("cors") //Newly added

var express = require('express'),
  app = express(),
  port;

app.use(cors()) // Newly added

app.use(express.json());

//Swagger part (documentation)
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Questoinnaire API v(1.0)',
            version:'1.0.0',
            description:'Api pour le cours de Projet d\'intégration ',
            contact:{
                name:'Philippe Saucier',
                url:'https://cegeprdl.ca',
                email:'philippe.saucier.cegep@gmail.com'
            },
            servers:["http://localhost:3000"]
        }

    },
    apis:["./api/routes/*.js"],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],

}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/myApiDocs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));


var testRoutes = require('./api/routes/testRoutes.js');
app.use("/api", testRoutes);

//Route par défaut
app.get('/', (req, res) => { res.status(200).json({ message: 'Veuillez appeler vos commandes dans /api/...' });});
app.get('/api', (req, res) => { 
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Veuillez appeler vos commandes dans /api/...' });});


// //Share images directory
// app.get('/images/categories/:file', function (req, res) {
//     var file = req.params.file
//     res.sendFile(global.gConfig.directory + "/images/categories/"+file)    
//   })
//   app.get('/images/:file', function (req, res) {
//     var file = req.params.file
//     res.sendFile(global.gConfig.directory + "/images/"+file)    
//   })

app.listen(port);
console.log('RESTful API server <questionnaireAPI> and started on: ' + port);