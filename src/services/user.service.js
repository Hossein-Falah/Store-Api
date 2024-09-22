const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const UserModel = require("../models/user.model");

class UserService {
    #model

    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }

    async getAllUsers() {
        const users = await this.#model.find({}, { password: 0, __v: 0, refreshToken: 0 }, { sort: { createdAt: -1 } });
        
        return users;
    }

    async getUserById(userId) {
        const user = await this.#model.findById(userId, { password: 0, __v: 0, refreshToken: 0 });
        if (!user) throw new createHttpError.NotFound("کاربری با این مشخصات یافت نشد");
        return user;
    }

    async createUser() {

    }

    async updateUser() {

    }

    async deleteUser() {

    }

    async banUser() {

    }

    async unbanUser() {

    }

    async changeUserRole() {
        
    }
}

module.exports = new UserService();