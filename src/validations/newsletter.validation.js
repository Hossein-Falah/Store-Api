const Joi = require("joi");
const createHttpError = require("http-errors");

const newsLetterValidation = Joi.object({
    email: Joi.string().required('ایمیل اجباری می باشد').error(createHttpError.BadRequest("ایمیل را صحیح وارد کنید"))
})

const sendNewsLetterValidation = Joi.object({
    subject: Joi.string().required('عنوان اجباری می باشد').error(createHttpError.BadRequest("عنوان را صحیح وارد کنید")),
    message: Joi.string().required('پیام اجباری می باشد').error(createHttpError.BadRequest("پیام را صحیح وارد کنید"))
})

module.exports = {
    newsLetterValidation,
    sendNewsLetterValidation
}