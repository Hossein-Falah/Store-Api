const Joi = require("joi");
const createHttpError = require("http-errors");

const { MongoIDPattern } = require("../constants/constants");

const menuValidation = Joi.object({
    title: Joi.string().min(3).max(20).required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
    slug: Joi.string().required("slug نمی تواند خالی باشد").error(createHttpError.BadRequest("slug صحیح نمی باشد")),
    parent: Joi.string().pattern(MongoIDPattern).error(createHttpError.BadRequest("شناسه والد صحیح نمی باشد")),
});

module.exports = {
    menuValidation
}