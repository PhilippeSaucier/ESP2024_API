const mongooseTest = require('../models/testModels');

var express = require('express'),
    app = express(),
    port;
app.use(express.json());

exports.test = async function (req, res) {
    try {
        const messages = await mongooseTest.find({}, 'message');
        const messageArray = messages.map(message => message.message);
        res.json(messageArray);
    } catch (err) {
        res.send(err);
    }
};

exports.add = async function (req, res) {
    console.log(req.body);
    try {
        const newMessage = await mongooseTest.create(req.body);
        res.json(newMessage);
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async function (req, res) {
    try {
        const deletedMessage = await mongooseTest.deleteOne({ message: req.body.message });
        res.json(deletedMessage);
    }
    catch (err) {
        res.send(err
        );
    }
};