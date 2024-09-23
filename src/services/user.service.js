const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const UserModel = require("../models/user.model");
const BanModel = require("../models/ban.model");
const { deleteInvalidPropertyObject } = require("../utils/function.utils");

class UserService {
    #model
    #banModel;

    constructor() {
        autoBind(this);
        this.#model = UserModel;
        this.#banModel = BanModel;
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

    async banUser(userId) {
        const user = await this.#model.findOne({ _id: userId });
        if (!user) throw new createHttpError.NotFound("کاربری با این مشخصات یافت نشد");
        
        const banUser = await this.#banModel.findOne({ phone: user.phone });
        if (banUser) throw new createHttpError.Conflict("کاربر قبلا مسدود شد");
       
        if (user.role === "ADMIN") throw new createHttpError.Forbidden("مدیران را نمیتوانن مسدود کرد");

        const banUserResult = await this.#banModel.create({ phone: user.phone });
    
        if (banUserResult) {
            return { message: "کاربر مسدود شد" };
        }

        return { message: "خطایی رخ داده است" };
    }

    async unbanUser(id) {
        const user = await this.#model.findOne({ _id: id });
        if (!user) throw new createHttpError.NotFound("کاربری با این مشخصات یافت نشد");
        
        const banUser = await this.#banModel.findOne({ phone: user.phone });
        if (!banUser) throw new createHttpError.Forbidden("کاربر مسدود نشده است");

        const unbanUserResult = await this.#banModel.deleteOne({ phone: user.phone });
        if (!unbanUserResult.deletedCount) throw new createHttpError.InternalServerError("خطایی رخ داده است");
        
        if (unbanUserResult) {
            return { message: "کاربر از مسدودیت خارج شد" };
        }
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