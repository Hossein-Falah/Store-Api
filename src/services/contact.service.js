const autoBind = require("auto-bind");
const ContactModel = require("../models/contact.model");
const createHttpError = require("http-errors");

class ContactService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = ContactModel;
    };

    async sendMessage({ name, email, phone, message }) {
        const contact = await this.#model.create({ name, email, phone, message, answer: 0 });
        if (!contact) throw new createHttpError.InternalServerError("ارسال پیام انجام نشد");
    };

    async getMessages() {
        const messages = await this.#model.find({});
        return messages;
    };

    async getMessage() {
    };

    async UpdateMessage() {
    };

    async deleteMessage() {
    };

    async answerMessage() {
    };
}

module.exports = new ContactService();