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

    async getMessage(id) {
        const message = await this.#model.findOne({ _id: id });
        if (!message) throw new createHttpError.NotFound("پیغام مورد نظر یافت نشد");
        return message;
    };

    async UpdateMessage(id, { name, email, phone, message }) {
        const resultUpdate = await this.#model.findOneAndUpdate({ _id: id }, { $set: { name, email, phone, message } });
        if (!resultUpdate) throw new createHttpError.NotFound("پیغام مورد نظر یافت نشد");
    };

    async deleteMessage(id) {
        const resultDelete = await this.#model.findOneAndDelete({ _id: id });
        if (!resultDelete) throw new createHttpError.NotFound("پیغام مورد نظر یافت نشد");
    };

    async answerMessage() {
    };
}

module.exports = new ContactService();