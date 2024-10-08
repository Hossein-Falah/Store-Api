const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const notificationService = require("../services/notification.service");
const { notificationValidation } = require("../validations/notification.validation");
const { objectIdValidation } = require("../validations/id.validation");

class NotificationController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = notificationService;
    };

    async getNotifications(req, res, next) {
        try {
            const notifications = await this.#service.getNotifications();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                notifications
            })
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
            const { message, admin } = await notificationValidation.validateAsync(req.body);

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
            const { id } = req.params;            

            await objectIdValidation.validateAsync({ id });

            await this.#service.deleteNotificationById(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "اعلان با موفقیت حذف شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteAllNotifications(req, res, next) {
        try {
            await this.#service.deleteAllNotifications();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "همه اعلان ها با موفقیت حذف شدند"
            });
        } catch (error) {
            next(error);
        }
    }

    async updateNotificationById(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const { message, admin } = await notificationValidation.validateAsync(req.body);

            await this.#service.updateNotificationById(id, { message, admin });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "اعلان با موفقیت ویرایش شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async answerNotificationById(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const { message } = await notificationValidation.validateAsync(req.body);

            await this.#service.answerNotificationById(id, { message });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "اعلان با موفقیت پاسخ داده شد"
            })
        } catch (error) {
            next(error);
        }
    }

    async seenNotificationById(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.seenNotificationById({ id });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "اعلان با موفقیت خوانده شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async seenAllNotifications(req, res, next) {
        try {
            await this.#service.seenAllNotifications();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "همه اعلان ها با موفقیت خوانده شدند"
            })
        } catch (error) {
            next(error);
        }
    }

    async getCountNotifications(req, res, next) {
        try {
            const count = await this.#service.getCountNotifications();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                count
            })
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new NotificationController();