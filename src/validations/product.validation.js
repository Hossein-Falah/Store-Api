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

module.exports = {
    productValidation
};