// authentication
const {sign, veryify} = require('jsonwebtoken')
require('dotenv').config()

function createToken(user) {
    return sign({
        userEmail: user.userEmail,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '2h'
    }
    )
}

function verifyAToken(req, res, next) {
    try {
        console.log("Get token from req.header['authorization");
        const token = req.headers["authorization"]
        console.log(token);
        next()
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: e.message
        })
    }
    
}

module.exports = {
    createToken,
    verifyAToken
}