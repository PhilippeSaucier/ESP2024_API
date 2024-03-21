const jwt = require('jsonwebtoken');

//-1 = token not found
//-2 = token invalid
// 0 = good token

function verifyToken(tokenAndUser){
    if(!tokenAndUser){
        return -1;
    }
    try{
        const bearer = tokenAndUser.token.split(' ');
        const token = bearer[1];

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        tokenAndUser.email = decoded.email;
    }
    catch(err){
        return -2;
    }

    return 0;
}

const verifyTokenUser = (req, res, next) => {
    var tokenAndUser = {token : req.headers['authorization']};
    switch(verifyToken(tokenAndUser)){
        case -1: //No token found
            return res.status(401).json({message: "A token is required for authentication"});
        case -2: //Token invalid
            return res.status(401).json({message: "Token invalid, please login again"});
        default: //Good token
            global.email = tokenAndUser.email;
            return next();
    }
}

module.exports = verifyTokenUser;