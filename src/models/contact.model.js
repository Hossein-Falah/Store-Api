const { Schema, default: mongoose } = require("mongoose");

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    answer: {
        type: Number,
        require: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;