const Joi = require("joi");
const createHttpError = require("http-errors");

const { MongoIDPattern } = require("../constants/constants");

const productValidation = Joi.object({
    title: Joi.string().min(3).max(50).required("عنوان نمی تواند خالی باشد").error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
    description: Joi.string().min(3).max(500).required("توضیحات نمی تواند خالی باشد").error(createHttpError.BadRequest("توضیحات صحیح نمی باشد")),
    content: Joi.string().required("محتوا نمی تواند خالی باشد").error(createHttpError.BadRequest("محتوا صحیح نمی باشد")),
    tags: Joi.array().min(0).max(20).required("تگ ها نمی تواند خالی باشد").error(createHttpError.BadRequest("تگ ها صحیح نمی باشد")),
    category: Joi.string().pattern(MongoIDPattern).required("دسته بندی نمی تواند خالی باشد").error(createHttpError.BadRequest("دسته بندی صحیح نمی باشد")),
    slug: Joi.string().required("slug نمی تواند خالی باشد").error(createHttpError.BadRequest("slug صحیح نمی باشد")),
    price: Joi.number().required("قیمت نمی تواند خالی باشد").error(createHttpError.BadRequest("قیمت صحیح نمی باشد")),
    quantity: Joi.number().required("تعداد نمی تواند خالی باشد").error(createHttpError.BadRequest("تعداد صحیح نمی باشد")),
    discount: Joi.number().required("تخفیف نمی تواند خالی باشد").error(createHttpError.BadRequest("تخفیف صحیح نمی باشد")),
    status: Joi.string().allow("available", "unavailable").required("وضعیت نمی تواند خالی باشد").error(createHttpError.BadRequest("وضعیت صحیح نمی باشد")),
});

const updateProductValidation = Joi.object({
    title: Joi.string().allow("").min(3).max(50).error(createHttpError.BadRequest("عنوان صحیح نمی باشد")),
    description: Joi.string().allow("").min(3).max(500).error(createHttpError.BadRequest("توضیحات صحیح نمی باشد")),
    content: Joi.string().allow("").error(createHttpError.BadRequest("محتوا صحیح نمی باشد")),
    tags: Joi.array().allow("").min(0).max(20).error(createHttpError.BadRequest("تگ ها صحیح نمی باشد")),
    images: Joi.array().allow("").error(createHttpError.BadRequest("تصاویر صحیح نمی باشد")),
    category: Joi.string().allow("").pattern(MongoIDPattern).error(createHttpError.BadRequest("دسته بندی صحیح نمی باشد")),
    slug: Joi.string().allow("").error(createHttpError.BadRequest("slug صحیح نمی باشد")),
    price: Joi.number().allow("").error(createHttpError.BadRequest("قیمت صحیح نمی باشد")),
    quantity: Joi.number().allow("").error(createHttpError.BadRequest("تعداد صحیح نمی باشد")),
    discount: Joi.number().allow("").error(createHttpError.BadRequest("تخفیف صحیح نمی باشد")),
    status: Joi.string().allow("").error(createHttpError.BadRequest("وضعیت صحیح نمی باشد")),
});

module.exports = {
    productValidation,
    updateProductValidation
};