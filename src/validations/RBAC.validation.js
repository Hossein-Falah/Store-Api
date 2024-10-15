const Joi = require("joi");
const createHttpError = require("http-errors");
const { MongoIDPattern } = require("../constants/constants");

const permissionValidation = Joi.object({
    name: Joi.string().min(3).max(30).required("نام نمی تواند خالی باشد").error(createHttpError.BadRequest("نام صحیح نمی باشد")),
    description: Joi.string().min(3).max(100).required("توضیحات نمی تواند خالی باشد").error(createHttpError.BadRequest("توضیحات صحیح نمی باشد")),
});

const updatePermissionValidation = Joi.object({
    name: Joi.string().optional().allow("").min(3).max(30).error(createHttpError.BadRequest("نام صحیح نمی باشد")),
    description: Joi.string().optional().allow("").min(3).max(100).error(createHttpError.BadRequest("توضیحات صحیح نمی باشد")),
});

const roleValidation = Joi.object({
    title: Joi.string().min(3).max(30).required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان نمی تواند خالی باشد")),
    description: Joi.string().min(0).max(100).required("توضیحات نمی تواند خالی باشد").error(createHttpError.BadRequest("توضیحات نمی تواند خالی باشد")),
    permissions: Joi.array().items(Joi.string().pattern(MongoIDPattern)).error(createHttpError.BadRequest("دسترسی صحیح نمی باشد"))
})

module.exports = {
    permissionValidation,
    updatePermissionValidation,
    roleValidation
}