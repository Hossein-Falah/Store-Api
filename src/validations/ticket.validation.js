const Joi = require("joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../constants/constants");

const ticketValidation = Joi.object({
    title: Joi.string().required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان نمی تواند خالی باشد")),
    body: Joi.string().required("پیام نمی تواند خالی باشد").error(createHttpError.BadRequest("پیام نمی تواند خالی باشد")),
    product: Joi.string().required("محصول نمی تواند خالی باشد").pattern(MongoIDPattern).error(createHttpError.BadRequest("محصول صحیح نمی باشد")),
    priority: Joi.number().min(0).max(3).required("اولویت نمی تواند خالی باشد").error(createHttpError.BadRequest("اولویت نمی تواند خالی باشد")),
    department: Joi.string().pattern(MongoIDPattern).required("دپارتمان نمی تواند خالی باشد").error(createHttpError.BadRequest("دپارتمان نمی تواند خالی باشد")),
    departmentSub: Joi.string().pattern(MongoIDPattern).required("فرزند دپارتمان نمی تواند خالی باشد").error(createHttpError.BadRequest("فرزند دپارتمان نمی تواند خالی باشد")),   
    parent: Joi.string().optional().allow("").pattern(MongoIDPattern).error(createHttpError.BadRequest("شناسه والد صحیح نمی باشد")),
})

const answerValidation = Joi.object({
    body: Joi.string().required("پاسخ نمی تواند خالی باشد").error(createHttpError.BadRequest("پاسخ نمی تواند خالی باشد")),
})

module.exports = {
    ticketValidation,
    answerValidation
}