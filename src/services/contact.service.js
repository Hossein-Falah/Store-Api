const autoBind = require("auto-bind");
const ContactModel = require("../models/contact.model");

class ContactService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = ContactModel;
    };

    async sendMessage() {
    };

    async getMessages() {
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