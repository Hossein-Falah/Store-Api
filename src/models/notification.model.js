const { Schema, default: mongoose } = require("mongoose");

const NotificationSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    answer: {
        type: mongoose.Types.ObjectId,
        ref: "notification"
    },
    seen: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const NotificationModel = mongoose.model("notification", NotificationSchema);

module.exports = NotificationModel;