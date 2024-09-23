const Joi = require("joi");
const createHttpError = require('http-errors');

const userValidation = Joi.object({
    username: Joi.string().min(6).max(20).required("نام کاربری نمی تواند خالی باشد").error(createHttpError.BadRequest("نام کاربری صحیح نمی باشد")),
    name: Joi.string().min(6).max(20).error(createHttpError.BadRequest("نام را درست وارد کنید")),
    email: Joi.string().required("ایمیل نمی تواند خالی باشد").pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).error(createHttpError.BadRequest("ایمیل صحیح نمی باشد"))
})

module.exports = {
    userValidation
}