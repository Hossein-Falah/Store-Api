const { Schema, default: mongoose } = require("mongoose");

const BlogSchema = new Schema({
    title: { 
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true
    },
    description: {
        type: String,
        require: true,
        min: 3,
        max: 255
    },
    content: {
        type: String,
        required: true
    },
    author: { 
        type: mongoose.Types.ObjectId, 
        ref: "user", 
        required: true
    },
    image: { 
        type: String, 
        require: true 
    },
    slug: {
        type: String,
        required: true,
        min: 3,
        max: 255,
        unique: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: [],
        require: true
    },
    reading_time: {
        type: Object,
        require: true
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
    bookmarks: {
        type: [mongoose.Types.ObjectId],
        ref: "user",
        default: []
    },
    comments: {
        type: [mongoose.Types.ObjectId],
        ref: "comment",
        default: []
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true
    }
});

const BlogModel = mongoose.model('blog', BlogSchema);

module.exports = BlogModel;