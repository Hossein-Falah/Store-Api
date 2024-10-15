const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user.model");

const getToken = (headers) => {
    const authorization = headers?.authorization || "";
    const [bearer, token] = authorization.split(" ");

    if (token && bearer.toLowerCase() === "bearer") return token;
    throw new createHttpError.Unauthorized("لطفا مجددا وارد شوید");
}

const authenticateToken = async (req, res, next) => {
    try {
        // get token
        const token = getToken(req.headers); 
        
        // check token
        const payload = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
        const { email } = payload || {};
        
        // seach user with email
        const user = await UserModel.findOne({ email }, { password: 0 });
        if (!user) throw new createHttpError.Unauthorized("لطفا مجددا وارد شوید");

        req.user = user;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return next(new createHttpError.Unauthorized("لطفا مجددا وارد شوید"));
        }
        next(error);
    }
};

module.exports = {
    authenticateToken
}