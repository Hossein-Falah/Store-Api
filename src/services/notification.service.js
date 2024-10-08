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

    async deleteNotificationById() {
        
    }

    async deleteAllNotifications() {
        
    }

    async updateNotificationById() {
        
    }

    async answerNotificationById() {
        
    }

    async seenNotificationById() {
        
    };

    async seenAllNotifications() {
        
    }

    async getCountNotifications() {
        
    }
};

module.exports = new NotificationService();