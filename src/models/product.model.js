const { required } = require("joi");
const { Schema, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    description: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category",
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: "comment",
        default: []
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    likes: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        default: []
    },
    dislikes: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        default: []
    },
    bookmark: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        default: [] 
    },
    discount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 0,
        enum: ["available", "unavailable"],
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true
    }
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;