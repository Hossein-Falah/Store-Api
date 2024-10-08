const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const notificationService = require("../services/notification.service");
const { sendNotificationValidation } = require("../validations/notification.validation");

class NotificationController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = notificationService;
    };

    async getNotifications(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    };

    async getNotificationById(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    };

    async sendNotifications(req, res, next) {
        try {
            const { message, admin } = await sendNotificationValidation.validateAsync(req.body);

            await this.#service.sendNotifications({ message, admin });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "اعلان با موفقیت ارسال شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteNotificationById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async deleteAllNotifications(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async updateNotificationById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async answerNotificationById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async seenNotificationById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async seenAllNotifications(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getCountNotifications(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new NotificationController();