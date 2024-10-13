const { Schema, default: mongoose } = require("mongoose");

const DiscountSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    percent: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    max: {
        type: Number,
        required: true
    },
    uses: {
        type: Number,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});

const DiscountModel = mongoose.model("discount", DiscountSchema);

module.exports = DiscountModel;