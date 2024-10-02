const Joi = require("joi");
const createHttpError = require('http-errors');
const { MongoIDPattern } = require("../constants/constants");

const addCategoryValidation = Joi.object({
    name: Joi.string().min(3).max(20).required("نام دسته بندی نمی تواند خالی باشد").error(createHttpError.BadRequest("نام دسته بندی صحیح نمی باشد")),
    parent: Joi.string().allow("").pattern(MongoIDPattern).error(createHttpError.BadRequest("شناسه ارسالی درست نمی باشد"))
})

module.exports = {
    addCategoryValidation
}