const Joi = require("joi");
const createHttpError = require('http-errors');

const contactValidation = Joi.object({
    name: Joi.string().required("نام نمی تواند خالی باشد").error(createHttpError.BadRequest("نام نمی تواند خالی باشد")),
    email: Joi.string().required("ایمیل نمی تواند خالی باشد").error(createHttpError.BadRequest("ایمیل نمی تواند خالی باشد")),
    phone: Joi.string().length(11).pattern(/^09[0-9]{9}$/).error(createHttpError.BadRequest("شماره وارد شده صحیح نمی باشد")),
    message: Joi.string().required("پیام نمی تواند خالی باشد").error(createHttpError.BadRequest("پیام نمی تواند خالی باشد")),
});

module.exports = {
    contactValidation
}