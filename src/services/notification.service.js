const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const NotificationModel = require("../models/notification.model");
const { default: mongoose } = require("mongoose");

class NotificationService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = NotificationModel;
    };

    async getNotifications() {
        const notifications = await this.#model.aggregate([
            {
                $lookup: {
                    from: "notifications",
                    localField: "answer",
                    foreignField: "_id",
                    as: "answerNotification"
                }
            },
            {
                $unwind: {
                    path: "$answerNotification",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "admin",
                    foreignField: "_id",
                    as: "admin"
                }
            },
            {
                $unwind: {
                    path: "$admin",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    "admin.name": 1,
                    "admin.username": 1,
                    "admin.email": 1,
                    "admin.phone": 1,
                    message: 1,
                    seen: 1,
                    createdAt: 1,
                    answerNotification: {
                        _id: 1,
                        message: 1,
                    },
                },
            },
        ]);

        return notifications;
    };

    async getNotificationById(id) {
        const notification = await this.#model.aggregate([
            { 
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $lookup: {
                    from: "notifications",
                    localField: "answer",
                    foreignField: "_id",
                    as: "answerNotification"
                },
            },
            {
                $unwind: {
                    path: "$answerNotification",
                    preserveNullAndEmptyArrays: true
                },
            },
            {
                $lookup: {
                    from: "users",
                    localField: "admin",
                    foreignField: "_id",
                    as: "admin"
                },
            },
            {
                $unwind: {
                    path: "$admin",
                    preserveNullAndEmptyArrays: true
                },
            },
            {
                $project: {
                    "admin.name": 1,
                    "admin.username": 1,
                    "admin.email": 1,
                    "admin.phone": 1,
                    message: 1,
                    seen: 1,
                    createdAt: 1,
                    answerNotification: {
                        _id: 1,
                        message: 1,
                    },
                }
            }
        ]);

        if (!notification.length) throw new createHttpError.NotFound("اطلاعاتی برای نمایش وجود ندارد");

        return notification[0];
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
        const resultNotification = await this.#model.findOneAndUpdate({ _id: id }, { $set: { message, admin } });
        if (!resultNotification) throw new createHttpError.InternalServerError("بروزرسانی انجام نشد");
    }

    async answerNotificationById(id, { message }) {
        const notification = await this.checkExistNotification(id);

        const resultAnswer = await this.#model.create({
            admin: notification._id,
            answer: notification._id,
            message
        });

        if (!resultAnswer) throw new createHttpError.InternalServerError("پاسخ انجام نشد");
    }

    async seenNotificationById({ id }) {
        await this.checkExistNotification(id);

        const resultNotification = await this.#model.updateOne({ _id: id }, { $set: { seen: 1 } });
        if (!resultNotification.modifiedCount) throw new createHttpError.InternalServerError("خطای سرور");
    };

    async seenAllNotifications() {
        const resultNotification = await this.#model.updateMany({}, { $set: { seen: 1 } });
        if (!resultNotification.modifiedCount) throw new createHttpError.InternalServerError("خطای سرور");
    }

    async getCountNotifications() {
        const count = await this.#model.find({}).countDocuments();
        return count
    }

    async getUnSeenNotifications() {
        const notifications = await this.#model.find({ seen: 0 });
        return notifications
    }

    async getSeenNotifications() {
        const notifications = await this.#model.find({ seen: 1 });
        return notifications
    }

    async checkExistNotification(id) {
        const notification = await this.#model.findById({ _id: id });
        if (!notification) throw new createHttpError.NotFound("اعلان مورد نظر یافت نشد");
        return notification;
    }
};

module.exports = new NotificationService();