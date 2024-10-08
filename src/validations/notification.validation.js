const Joi = require("joi");
const createHttpError = require('http-errors');

const { MongoIDPattern } = require("../constants/constants");

const sendNotificationValidation = Joi.object({
    message: Joi.string().required("پیام نمی تواند خالی باشد").error(createHttpError.BadRequest("پیام نمی تواند خالی باشد")),
    admin: Joi.string().pattern(MongoIDPattern).error(createHttpError.BadRequest("شناسه ادمین نمی تواند خالی باشد"))
});

module.exports = {
    sendNotificationValidation
}