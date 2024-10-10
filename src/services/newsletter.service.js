const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { promisify } = require('util');
const nodemailer = require('nodemailer');

const NewsLetterModel = require("../models/newsletter.model");

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
        return { message: "ایمیل شما با موفقعیت در خبرنامه ثبت شد" }
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

    async sendNewsLetter({ subject, message }) {
        const subscribers = await this.#model.find({ isSubscribed: true });

        if (subscribers.length > 0) {
            const emailList = subscribers.map(user => user.email);

            // send email
            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            const emailOption = {
                from: process.env.EMAIL,
                to: emailList,
                subject: "خبرنامه",
                html: `
                    <h1>${subject}</h1>
                    <p>${message}</p>
                `
            };

            // convert sendMail to Promise
            const sendMail = promisify(transport.sendMail).bind(transport);

            try {
                await sendMail(emailOption);
            } catch (error) {
                console.error("Error sending email:", error);
                throw new createHttpError.InternalServerError("ارسال پیام انجام نشد");
            }
        } else {
            throw createHttpError.NotFound("هیچ کاربری در خبرنامه ثبت نشده است");
        }
    }
};

module.exports = new NewsLetterService();