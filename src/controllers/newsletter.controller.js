const autoBind = require("auto-bind");
const newsletterService = require("../services/newsletter.service");

class NewsLetterController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = newsletterService;
    }

    async getNewsLetters(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async getNewsLetter(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async subscribe(req, res, next) {
        try {
            
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