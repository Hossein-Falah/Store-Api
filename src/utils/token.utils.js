const jwt = require('jsonwebtoken');

const signAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m' });
}

const signRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '60m' });
}

module.exports = {
    signAccessToken,
    signRefreshToken
}