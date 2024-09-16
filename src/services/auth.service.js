const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const UserModel = require("../models/user.model");
const HashPassword = require("../utils/hash.utils");
const { signAccessToken, signRefreshToken } = require("../utils/token.utils");

class AuthService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }

    async signup(userData) {
        const user = await this.#model.findOne({ $or: [{ username: userData.username }, { email: userData.email }] });
        if (user) throw new createHttpError.Conflict("کاربری با این مشخصات وجود دارد");
        
        const hashedPassword = HashPassword(userData.password);
        const accessToken = signAccessToken({ email: userData.email });
        const refreshToken = signRefreshToken({ email: userData.email });
        
        const userCount = await this.#model.countDocuments();

        await this.#model.create({ 
            ...userData, 
            password: hashedPassword,
            role: userCount ? "USER" : "ADMIN",
            refreshToken 
        }).catch((err) => {
            throw new createHttpError.InternalServerError(err.message);
        });

        return { accessToken, refreshToken };
    }

    async login() {

    }

    async refreshToken() {

    }

    async forgetPassword() {

    }

    async resetPassword() {

    }

    async getMe() {

    }

    async checkExistsUser(username, email) {
        const user = await this.#model.findOne({ $or: [{ username }, { email }] });
        return user
    }
}

module.exports = new AuthService();