const { Schema, default: mongoose } = require("mongoose");

const TicketSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    answer: {
        type: Number,
        default: 0
    },
    isAnswer: {
        type: Number,
        required: false
    },
    priority: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product",
        required: false
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: "department",
        required: true
    },
    departmentSub: {
        type: mongoose.Types.ObjectId,
        ref: "departmentsub",
        required: true
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: "ticket",
        required: false
    }
}, {
    timestamps: true
});

const TicketModel = mongoose.model("ticket", TicketSchema);

module.exports = TicketModel;