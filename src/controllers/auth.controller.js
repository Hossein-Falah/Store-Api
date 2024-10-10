const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const authService = require("../services/auth.service");
const { signupValidation, loginValidation, forgetPasswordValidation } = require("../validations/auth.validation");

class AuthController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = authService
    }

    async signup(req, res, next) {
        try {
            const { username, name, email, password, phone } = req.body;

            await signupValidation.validateAsync({ username, name, email, password, phone });

            const user = await this.#service.signup({ username, name, email, password, phone });
            
            return res.status(StatusCodes.CREATED).json({
                statusCode : StatusCodes.OK,
                message: "کاربر با موفقیت ثبت شد",
                data: user
            })
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            await loginValidation.validateAsync({ email, password });

            const user = await this.#service.login({ email, password });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message: "کاربر با موفقعیت لاگین شد",
                data: user
            })
        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req, res, next) {
        try {
            const { refreshToken } = req.body;            
            
            const user = await this.#service.refreshToken({ refreshToken });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                data: user
            })
        } catch (error) {
            next(error);
        }
    }

    async forgetPassword(req, res, next) {
        try {
            const { email } = req.body;

            await forgetPasswordValidation.validateAsync({ email });

            await this.#service.forgetPassword({ email });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message: "لینک بازیابی پسورد به ایمیل شما ارسال شد",
            })
        } catch (error) {
            next(error);
        }
    }

    async resetPassword(req, res, next) {
        try {
            const { token } = req.params;
            const { password } = req.body;

            await this.#service.resetPassword({ token, password });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message: "پسورد با موفقعیت تغییر کرد",
            })
        } catch (error) {
            next(error);
        }
    }

    async getMe(req, res, next) {
        try {
            const user = await this.#service.getMe(req);

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                data: user
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports =  new AuthController();