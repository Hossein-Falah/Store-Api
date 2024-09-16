const authService = require("../services/auth.service");
const autoBind = require("auto-bind");

class AuthController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = authService
    }

    async signup(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async forgetPassword(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async resetPassword(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getMe(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}

module.exports =  new AuthController();