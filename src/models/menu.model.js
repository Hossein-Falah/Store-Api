const { Schema, default: mongoose } = require("mongoose");

const MenuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "menu",
        required: false
    }
}, {
    timestamps: true
});

const MenuModel = mongoose.model("menu", MenuSchema);

module.exports = MenuModel;