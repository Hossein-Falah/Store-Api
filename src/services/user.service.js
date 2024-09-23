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

    async deleteUser(userId) {
        const userResult = await this.#model.deleteOne({ _id: userId });
        if(!userResult.deletedCount) throw new createHttpError.NotFound("حذف انجام نشد");
    }

    async banUser() {

    }

    async unbanUser() {

    }

    async changeUserRole({ userId, role }) {
        const user = await this.#model.findOne({ _id: userId });
        if(!user) throw new createHttpError.NotFound("کاربری با این مشخصات یافت نشد");

        const changeRoleResult = await this.#model.findOneAndUpdate({ _id: userId }, { $set: { role }});

        if(!changeRoleResult) throw new createHttpError.NotFound("بروزرسانی انجام نشد");

        return { message: `نقش کاربر به ${role} تغییر کرد` };
    }
}

module.exports = new UserService();