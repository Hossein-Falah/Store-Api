const Joi = require("joi");
const createHttpError = require('http-errors');
const { MongoIDPattern } = require("../constants/constants");

const objectIdValidation = Joi.object({
    id: Joi.string().pattern(MongoIDPattern).required("ایدی نمی تواند خالی باشد").error(createHttpError.BadRequest("ایدی صحیح نمی باشد"))
});

module.exports = {
    objectIdValidation
}