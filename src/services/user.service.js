const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const UserModel = require("../models/user.model");
const { deleteInvalidPropertyObject } = require("../utils/function.utils");

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

    async updateUser(userData) {
        const { username, name, email } = userData;

        deleteInvalidPropertyObject(userData, [undefined, null, "", " ", NaN, 0, false]);
        const userResult = await this.#model.updateOne({ _id: userData.id }, { $set: { username, name, email } });
        if(!userResult.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
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