const autoBind = require("auto-bind");
const contactService = require("../services/contact.service");

class ContactController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = contactService;
    };

    async sendMessage(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async getMessages(req, res, next) {
        try {
            
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