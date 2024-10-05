const Joi = require("joi");
const createHttpError = require('http-errors');

const { MongoIDPattern } = require("../constants/constants");

const createBlogValidation = Joi.object({
    title: Joi.string().min(3).max(50).required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان باید بین 3 تا 50 کاراکتر باشد")),
    description: Joi.string().min(3).max(500).required("توضیحات نمی تواند خالی باشد").error(createHttpError.BadRequest("توضیحات باید بین 3 تا 500 کاراکتر باشد")),
    content: Joi.string().required("محتوا نمی تواند خالی باشد").error(createHttpError.BadRequest("محتوا را به درستی وارد کنید")),
    slug: Joi.string().required("slug نمی تواند خالی باشد").error(createHttpError.BadRequest("slug را به درستی وارد کنید")),
    tags: Joi.array().min(0).max(20).required("تگ ها نمی تواند خالی باشد").error(createHttpError.BadRequest("تگ ها را به درستی وارد کنید")),
    category: Joi.string().pattern(MongoIDPattern).required("دسته بندی نمی تواند خالی باشد").error(createHttpError.BadRequest("دسته بندی را به درستی وارد کنید")),
});

const updateBlogValidation = Joi.object({
    title: Joi.string().min(3).max(50).error(createHttpError.BadRequest("عنوان باید بین 3 تا 50 کاراکتر باشد")),
    description: Joi.string().min(3).max(500).error(createHttpError.BadRequest("توضیحات باید بین 3 تا 500 کاراکتر باشد")),
    content: Joi.string().error(createHttpError.BadRequest("محتوا را به درستی وارد کنید")),
    slug: Joi.string().error(createHttpError.BadRequest("slug را به درستی وارد کنید")),
    tags: Joi.array().min(0).max(20).error(createHttpError.BadRequest("تگ ها را به درستی وارد کنید")),
    category: Joi.string().pattern(MongoIDPattern).error(createHttpError.BadRequest("دسته بندی را به درستی وارد کنید")),
})

module.exports = {
    createBlogValidation,
    updateBlogValidation
}