const config = require('./config.json');
const environmentConfig = config['production'];
const https = require('https');
const fs = require('fs');

global.gConfig = environmentConfig;
const port = global.gConfig.node_port;

const cors = require("cors"); // Importer le middleware CORS

const express = require('express');
const app = express();

const corsOptions = global.gConfig.corsOptions;
app.use(cors(corsOptions));

app.use(express.json());

// Swagger part (documentation)
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Questoinnaire API v(1.0)',
            version: '1.0.0',
            description: 'Api pour le cours de Projet d\'intégration ',
            contact: {
                name: 'Philippe Saucier',
                url: 'https://cegeprdl.ca',
                email: 'philippe.saucier.cegep@gmail.com'
            },
            servers: ["https://142.93.153.109"]
        }
    },
    apis: ["./api/routes/*.js"],
    tags: [{
        "name": "User",
        "description": "Endpoints"
    }],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/myApiDocs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// const testRoutes = require('./api/routes/testRoutes.js');
// app.use("/api", testRoutes);

// Route par défaut
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Veuillez appeler vos commandes dans /api/...' });
});

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () => {
    console.log('RESTful API server <questionnaireAPI> and started on: ' + port);
  });
