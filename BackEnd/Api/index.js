const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());

app.get('/test', (req,res) => {    res.json("Message de l'API")})

app.listen(5000, () => {    console.log("Serveur à l'écoute")})