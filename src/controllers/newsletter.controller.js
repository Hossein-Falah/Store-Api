const autoBind = require("auto-bind");
const newsletterService = require("../services/newsletter.service");
const { newsLetterValidation } = require("../validations/newsletter.validation");
const { StatusCodes } = require("http-status-codes");
const { objectIdValidation } = require("../validations/id.validation");

class NewsLetterController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = newsletterService;
    }

    async getNewsLetters(req, res, next) {
        try {
            const users = await this.#service.getNewsLetters();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                users
            })
        } catch (error) {
            next(error);
        }
    };

    async getNewsLetter(req, res, next) {
        try {
            const { id } = req.params;
            
            await objectIdValidation.validateAsync({ id });

            const user = await this.#service.getNewsLetter({ id });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                user
            });
        } catch (error) {
            next(error);
        }
    };

    async subscribe(req, res, next) {
        try {
            const { email } = await newsLetterValidation.validateAsync(req.body);
            

            const message = await this.#service.subscribe({ email });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message
            })
        } catch (error) {
            next(error);
        }
    };

    async unsubscribe(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async sendNewsLetter(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new NewsLetterController();