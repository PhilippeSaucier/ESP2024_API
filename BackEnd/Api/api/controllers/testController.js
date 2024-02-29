const mongooseUsers = require('../models/usersModels');

var express = require('express'),
    app = express(),
    port;
app.use(express.json());

exports.test = async function (req, res) {
    try {
        const messages = await mongooseUsers.find({}, 'message');
        const messageArray = messages.map(message => message.message);
        res.json(messageArray);
    } catch (err) {
        res.send(err);
    }
};

exports.add = async function (req, res) {
    try {
        const newMessage = await mongooseUsers.create(req.body);
        res.json(newMessage);
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async function (req, res) {
    try {
        const deletedMessage = await mongooseUsers.deleteOne({ message: req.body.message });
        res.json(deletedMessage);
    }
    catch (err) {
        res.send(err
        );
    }
};