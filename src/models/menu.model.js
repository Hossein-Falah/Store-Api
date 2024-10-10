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
        required: false,
        default: null
    }
}, {
    timestamps: true,
    id: false,
    toJSON: {
        virtuals: true
    }
});

MenuSchema.virtual("subMenus", {
    ref: "menu",
    localField: "_id",
    foreignField: "parent"
});

function autoPopulate(next) {
    this.populate([{ path: "subMenus", select: { __v: 0, id: 0 }}]);
    next();
}

MenuSchema.pre("find", autoPopulate).pre("findOne", autoPopulate);

const MenuModel = mongoose.model("menu", MenuSchema);

module.exports = MenuModel;