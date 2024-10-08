const autoBind = require("auto-bind");

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

    async seedNotifications() {
        
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