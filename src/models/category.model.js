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
    id: false,
    toJSON: {
        virtuals: true
    }
});

CategorySchema.virtual('children', {
    ref: 'category',
    localField: '_id',
    foreignField: 'parent'
});

function autoPopulate(next) {
    this.populate([{path: "children", select: { __v: 0, id: 0 }}]);
    next();
}

CategorySchema.pre('find', autoPopulate).pre('findOne', autoPopulate);

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;