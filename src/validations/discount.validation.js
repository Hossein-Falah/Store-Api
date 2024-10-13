const Joi = require("joi");
const createHttpError = require("http-errors");

const { MongoIDPattern } = require("../constants/constants");

const discountValidation = Joi.object({
    code: Joi.string().required("کد تخفیف نمی تواند خالی باشد").error(createHttpError.BadRequest("کد تخفیف صحیح نمی باشد")),
    percent: Joi.number().min(0).max(100).required("درصد تخفیف نمی تواند خالی باشد").error(createHttpError.BadRequest("درصد تخفیف صحیح نمی باشد")),
    product: Joi.string().pattern(MongoIDPattern).required("ایدی نمی تواند خالی باشد").error(createHttpError.BadRequest("ایدی صحیح نمی باشد")),
    max: Joi.number().min(0).error(createHttpError.BadRequest("حداکثر تعداد نمی تواند خالی باشد")),
});

const discountCodeValidation = Joi.object({
    discount: Joi.string().min(0).max(100).required("ایدی تخفیف نمی تواند خالی باشد").error(createHttpError.BadRequest("ایدی تخفیف صحیح نمی باشد")),
});

module.exports = {
    discountValidation,
    discountCodeValidation
}