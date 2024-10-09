const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const contactService = require("../services/contact.service");
const { contactValidation } = require("../validations/contact.validation");

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
            
        } catch (error) {
            next(error);
        }
    };

    async UpdateMessage(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async deleteMessage(req, res, next) {
        try {
            
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