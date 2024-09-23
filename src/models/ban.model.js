const { default: mongoose, Schema } = require("mongoose");

const banUserSchema = new Schema({
    phone: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const BanModel = mongoose.model("ban", banUserSchema);

module.exports = BanModel