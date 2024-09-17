const jwt = require('jsonwebtoken');
const createHttpError = require("http-errors");

const UserModel = require('../models/user.model');

const signAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '15m' });
};

const signRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '60m' });
};

const verifyRefreshToken = async token => {
    try {
        // verify refresh token
        const payload = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);

        // search user in DB
        const user = await UserModel.findOne({ email: payload.email }, { password: 0, refreshToken: 0 });

        // check exsist user
        if (!user) throw new createHttpError.Unauthorized("کاربر مورد نظر یافت نشد");

        return user.email
    } catch (error) {
        throw new createHttpError.Unauthorized("کاربر مورد نظر یافت نشد");
    }
}

module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken
}