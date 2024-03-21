var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = process.env.TOKEN_SECRET;
const JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
const JWT_EXPIRE_SECRET = process.env.TOKEN_EXPIRE;

module.exports = {
    generateAccessToken: function (email) {
        return jwt.sign({email:email}, JWT_SIGN_SECRET, { expiresIn: JWT_EXPIRE_SECRET });
    },
    generateRefreshToken: function (email) {
        return jwt.sign({email:email}, JWT_REFRESH_SECRET, { expiresIn: "7d" });
    },
    generateAppToken: function (user) {
        return jwt.sign({user:user}, JWT_SIGN_SECRET);
    },
    verifyToken: function (token) {
        return jwt.verify(token, JWT_SIGN_SECRET);
    },
    verifyRefreshToken: function (token) {
        return jwt.verify(token, JWT_REFRESH_SECRET);
    },
    verifyAppToken: function (appKey) {
        try{
            const decoded = this.verifyToken(appKey);

            if(decoded.uname != process.env.CREATION_APP_TOKEN_EMAIL){
                return false;
            }
        }
        catch(err){
            return false;
        }
        return true;
    }
}