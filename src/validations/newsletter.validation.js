const Joi = require("joi");
const createHttpError = require("http-errors");

const newsLetterValidation = Joi.object({
    email: Joi.string().required('ایمیل اجباری می باشد').error(createHttpError.BadRequest("ایمیل را صحیح وارد کنید"))
})

module.exports = {
    newsLetterValidation
}