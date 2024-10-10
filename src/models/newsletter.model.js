const { default: mongoose, Schema } = require("mongoose");

const NewsLetterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    isSubscribed: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    unsubscribedAt: {
        type: Date,
        default: null
    }
});

const NewsLetterModel = mongoose.model("newsletter", NewsLetterSchema);

module.exports = NewsLetterModel;