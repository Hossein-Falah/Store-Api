const { Schema, default: mongoose } = require("mongoose");

const CommentSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    comment: {
        type: String,
        min: 3,
        max: 500,
        trim: true,
        required: true
    },
    blog: {
        type: mongoose.Types.ObjectId,
        ref: "blog"
    },
    isAccept: {
        type: Number,
        default: 0
    },
    score: {
        type: Number,
        default: 5
    },
    isAnswer: {
        type: Number,
        required: true
    },
    reply: {
        type: mongoose.Types.ObjectId,
        ref: "comment",
        default: null
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
    }
}, {
    id: false,
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

CommentSchema.virtual('replies', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'reply'
});

function autoPopulate(next) {
    this.populate([{ path: "replies", select: { __v: 0, id: 0 } }]);
    next();
}

CommentSchema.pre('find', autoPopulate).pre('findOne', autoPopulate);

const CommentModel = mongoose.model('comment', CommentSchema);

module.exports = CommentModel;