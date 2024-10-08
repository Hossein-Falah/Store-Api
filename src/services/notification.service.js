const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const NotificationModel = require("../models/notification.model");

class NotificationService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = NotificationModel;
    };

    async getNotifications() {
        
    };

    async getNotificationById() {
        
    };

    async sendNotifications({ message, admin }) {
        const notification = await this.#model.create({ message, admin });
        if (!notification) throw new createHttpError.InternalServerError("خطای سرور");
    }

    async deleteNotificationById(id) {        
        await this.checkExistNotification(id);
        
        const resultNotification = await this.#model.deleteOne({ _id: id });
        if (!resultNotification.deletedCount) throw new createHttpError.InternalServerError("حذف انجام نشد");
    }

    async deleteAllNotifications() {
        const resultNotification = await this.#model.deleteMany({});
        if (!resultNotification.deletedCount) throw new createHttpError.InternalServerError("حذف انجام نشد");
    }

    async updateNotificationById(id, { message, admin }) {
        const resultNotification = await this.#model.findOneAndUpdate({ _id: id }, { $set: { message, admin }});
        if (!resultNotification) throw new createHttpError.InternalServerError("بروزرسانی انجام نشد");
    }

    async answerNotificationById() {
        
    }

    async seenNotificationById() {
        
    };

    async seenAllNotifications() {
        
    }

    async getCountNotifications() {
        
    }

    async checkExistNotification(id) {
        const notification = await this.#model.findById({ _id: id });
        if (!notification) throw new createHttpError.NotFound("اعلان مورد نظر یافت نشد");
        return notification;
    }
};

module.exports = new NotificationService();