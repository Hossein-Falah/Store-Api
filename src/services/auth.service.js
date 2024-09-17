const jwt = require("jsonwebtoken");
const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const nodemailer = require('nodemailer')

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

    async forgetPassword({ email }) {
        // search user with email
        const user = await this.#model.findOne({ email });
        
        // check exsist user
        if (!user) throw new createHttpError.NotFound("کاربر مورد نظر یافت نشد");

        // create token for reset password
        const resetToken = jwt.sign({ email }, process.env.RESET_PASSWORD_SECRET_KEY, { expiresIn: '1h' });

        // create url for reset password
        const resetUrl = `${process.env.BASE_URL}/auth/reset-password/${resetToken}`;

        // send email
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const sendMessage = await transport.sendMail({
            from: process.env.EMAIL,
            to: user.email,
            subject: "بازیابی رمز عبور",
            html: `
                <p>Click the following link to reset your password:</p>
                <a href="${resetUrl}">Reset Password</a>
                <p>This link is valid for 1 hour.</p>
            `
        });
        return sendMessage
    }

    async resetPassword({ token, password }) {
        // authentication token reset password
        const decoded = jwt.decode(token, process.env.RESET_PASSWORD_SECRET_KEY);

        // search user with email
        const user = await this.#model.findOne({ email: decoded?.email });
        if (!user) throw new createHttpError.NotFound("کاربر مورد نظر یافت نشد");

        // hash new password user
        const hashedPassword = HashPassword(password);

        user.password = hashedPassword;
        user.save();
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