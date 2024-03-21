var jwtUtil = require('../util/utils');
const nodemailer = require('nodemailer');

var generator = require('generate-password');

const mongooseUser = require('../models/userModel');
const nodeMailerPort = 465;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: nodeMailerPort,
    secure: true,
    auth: {
        user: "",
        pass: ""
    }
});

exports.getAppToken = async function (req, res) {
    console.log("auth/getAppToken");

    const email = req.body.email;
    const password = req.body.password;
    const user = {uname: email};

    if(!email || !password){
        return res.status(400).json({message: "Email and password are required"});
    }

    if(email != process.env.CREATION_APP_TOKEN_EMAIL || password != process.env.CREATION_APP_TOKEN_PASSWORD){
        return res.status(401).json({message: "Ask the admin for the access"});
    }

    const appToken = jwtUtil.generateAppToken(user);
    res.json({appToken: appToken});
}

exports.register = async function (req, res) {
    console.log("auth/register");

    const {email, appKey} = req.body;

    if(!email, !appKey){
        return res.status(400).json({message: "Email is required"});
    }

    if(!jwtUtil.verifyAppToken(appKey)){
        return res.status(401).json({message: "Invalid app key"});
    }

    var newPassword = generator.generate({
        length: 10,
        numbers: true
    });

    transporter.sendMail({
        from: transporter.options.auth.user,
        to: email,
        subject: "Password",
        text: "Votre mot de passe est: " + newPassword
    });

    var newUser = {
        email: email,
        password: newPassword
    };

    newUser.token = jwtUtil.generateAccessToken(email);
    newUser.refreshToken = jwtUtil.generateRefreshToken(email);

    mongooseUser.findOne({email: email})
        .then((user) => {
            if(user){
                return res.status(400).json({message: "User already exists, login instead"});
            }
            else{
                mongooseUser.create(newUser).then((result) => {
                    return res.status(201).json({message: "User created"});
                }).catch((err) => {
                    return res.status(409).json({message: "Error creating user"});
                });
            }
        }).catch((err) => {
            return res.status(409).json({message: "Error creating user"});
        });
}