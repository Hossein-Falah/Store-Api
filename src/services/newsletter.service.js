const autoBind = require("auto-bind");
const NewsLetterModel = require("../models/newsletter.model");

class NewsLetterService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = NewsLetterModel;
    };

    async getNewsLetters() {
        
    };

    async getNewsLetter() {
        
    };

    async subscribe() {
        
    };

    async unsubscribe() {
        
    };

    async sendNewsLetter() {
        
    }
};

module.exports = new NewsLetterService();