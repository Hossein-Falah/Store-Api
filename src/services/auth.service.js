const UserModel = require("../models/user.model");

class AuthService {
    #model;

    constructor() {
        this.#model = UserModel;
    }

    async signup(req, res, next) {

    }

    async login(req, res, next) {

    }

    async refreshToken(req, res, next) {

    }

    async forgetPassword(req, res, next) {

    }

    async resetPassword(req, res, next) {

    }

    async getMe(req, res, next) {

    }
}

module.exports = new AuthService();