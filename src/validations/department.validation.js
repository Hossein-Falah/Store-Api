const createHttpError = require("http-errors");
const Joi = require("joi");

const departmentValidation = Joi.object({
    title: Joi.string().required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
});

module.exports = {
    departmentValidation
}