const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const UserModel = require("../models/user.model");
const { HashPassword, ComparePassword } = require("../utils/hash.utils");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("../utils/token.utils");

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

    async login({ email, password }) {
        const user = await this.checkExistsUser(email);

        const isMatchPassword = ComparePassword(password, user.password);
        if (!isMatchPassword) throw new createHttpError.Unauthorized('ایمیل یا رمزعبور اشتباه می باشد');

        const accessToken = signAccessToken({ email });
        const refreshToken = signRefreshToken({ email });

        user.refreshToken = refreshToken;
        await user.save();

        return { accessToken, refreshToken };
    }

    async refreshToken({ refreshToken }) {
        const email = await verifyRefreshToken(refreshToken);
        const user = await this.#model.findOne({ email });

        const accessToken = signAccessToken({ email: user.email });
        const newRefreshToken = signRefreshToken({ email: user.email });

        user.refreshToken = newRefreshToken;
        user.save();

        return { accessToken, newRefreshToken };
    }

    async forgetPassword() {

    }

    async resetPassword() {

    }

    async getMe() {

    }

    async checkExistsUser(email) {
        const user = await this.#model.findOne({ email });
        if (!user) throw new createHttpError.NotFound("کاربری با چنین مشخصاتی یافت نشد")
        return user
    }
}

module.exports = new AuthService();