const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const contactService = require("../services/contact.service");
const { contactValidation } = require("../validations/contact.validation");
const { objectIdValidation } = require("../validations/id.validation");

class ContactController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = contactService;
    };

    async sendMessage(req, res, next) {
        try {
            await contactValidation.validateAsync(req.body);

            await this.#service.sendMessage(req.body);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "پیام با موفقیت ارسال شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async getMessages(req, res, next) {
        try {
            const messages = await this.#service.getMessages();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                messages
            })
        } catch (error) {
            next(error);
        }
    };

    async getMessage(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.getMessage(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    };

    async UpdateMessage(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });
            
            const { name, email, phone, message } = await contactValidation.validateAsync(req.body);
            
            await this.#service.UpdateMessage(id, { name, email, phone, message });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "پیام با موفقیت ویرایش شد"
            })
        } catch (error) {
            next(error);
        }
    };

    async deleteMessage(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.deleteMessage(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "پیام با موفقیت حذف شد"
            })
        } catch (error) {
            next(error);
        }
    };

    async answerMessage(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new ContactController();