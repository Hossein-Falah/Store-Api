const Joi = require("joi");
const createHttpError = require("http-errors");

const signupValidation = Joi.object({
    username: Joi.string().min(6).max(20).required("نام کاربری نمی تواند خالی باشد").error(createHttpError.BadRequest("نام کاربری صحیح نمی باشد")),
    name: Joi.string().min(6).max(20).error(createHttpError.BadRequest("نام را درست وارد کنید")),
    email: Joi.string().required("ایمیل نمی تواند خالی باشد").error(createHttpError.BadRequest("ایمیل صحیح نمی باشد")),
    password: Joi.string().min(8).max(20).required("رمز عبور نمی تواند خالی باشد").error(createHttpError.BadRequest("رمز عبور صحیح نمی باشد")),
    phone: Joi.string().length(11).pattern(/^09[0-9]{9}$/).error(createHttpError.BadRequest("شماره وارد شده صحیح نمی باشد")),
})

module.exports = {
    signupValidation
}