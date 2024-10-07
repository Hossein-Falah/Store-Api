const Joi = require("joi");
const createHttpError = require('http-errors');

const { MongoIDPattern } = require("../constants/constants");

const createCommentValidation = Joi.object({
    comment: Joi.string().min(3).max(500).required("نظر نمی تواند خالی باشد").error(createHttpError.BadRequest("نظر نمی تواند خالی باشد")),
    blog: Joi.string().pattern(MongoIDPattern).required("ایدی نمی تواند خالی باشد").error(createHttpError.BadRequest("ایدی صحیح نمی باشد")),
    score: Joi.number().required("امتیاز نمی تواند خالی باشد").error(createHttpError.BadRequest("امتیاز نمی تواند خالی باشد")),
    reply: Joi.string().pattern(MongoIDPattern).allow("").error(createHttpError.BadRequest("ایدی نمی تواند خالی باشد")),
});

const updateCommentValidation = Joi.object({
    comment: Joi.string().min(3).max(500).error(createHttpError.BadRequest("نظر نمی تواند خالی باشد")),
});

module.exports = {
    createCommentValidation,
    updateCommentValidation
}