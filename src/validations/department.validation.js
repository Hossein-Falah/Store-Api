const Joi = require("joi");
const createHttpError = require("http-errors");

const departmentValidation = Joi.object({
    title: Joi.string().required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
});

const subDepartmentValidation = Joi.object({
    title: Joi.string().required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
    department: Joi.string().required("department نمی تواند خالی باشد").error(createHttpError.BadRequest("department صحیح نمی باشد")),
});

module.exports = {
    departmentValidation,
    subDepartmentValidation
}