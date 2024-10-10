const autoBind = require("auto-bind");
const NewsLetterModel = require("../models/newsletter.model");
const createHttpError = require("http-errors");

class NewsLetterService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = NewsLetterModel;
    };

    async getNewsLetters() {
        const users = await this.#model.find();
        return users;
    };

    async getNewsLetter({ id }) {
        const user = await this.#model.findOne({ _id: id });
        return user;
    };

    async subscribe({ email }) {
        const exsistEmail = await this.#model.findOne({ email });
        if (exsistEmail) {
            if (exsistEmail.isSubscribed) {
                throw createHttpError.Conflict("این ایمیل قبلا ثبت نام کرده اید");
            } else {
                await this.#model.findOneAndUpdate({ email }, {
                    $set: {
                        isSubscribed: true,
                        subscribedAt: null
                    }
                })
                return { message: "عضویت شما در خبرنامه با موفقیت فعال شد" };
            }
        };
        
        await this.#model.create({ email });
        return { message: "ایمیل شما با موفقعیت در خبرنامه ثبت شد"}
    };

    async unsubscribe({ email }) {
        const exsistEmail = await this.#model.findOne({ email });

        if (!exsistEmail) {
            throw createHttpError.Conflict("ایمیلی با این آدرس در خبرنامه ثبت نشده است");
        }

        if (!exsistEmail.isSubscribed) {
            throw createHttpError.BadRequest("شما قبلا لغو اشتراک کرده اید");
        }

        const resultUnsubscribe = await this.#model.findByIdAndUpdate({ _id: exsistEmail._id }, {
            $set: {
                isSubscribed: false,
                unsubscribedAt: Date.now()
            }
        });

        if (!resultUnsubscribe) throw createHttpError.InternalServerError("خطای سرور");
    };

    async sendNewsLetter() {
        
    }
};

module.exports = new NewsLetterService();