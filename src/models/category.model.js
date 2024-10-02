const { Schema, default: mongoose } = require("mongoose");

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "category",
        default: null
    }
}, {
    toJSON: {
        virtuals: true
    }
});

CategorySchema.virtual('children', {
    ref: 'category',
    localField: '_id',
    foreignField: 'parent'
});

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;