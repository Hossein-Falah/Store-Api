const { Schema, default: mongoose } = require("mongoose");

const SubDepartment = new Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "department",
    }
}, {
    timestamps: true
});

const SubDepartmentModel = mongoose.model("departmentsub", SubDepartment);

module.exports = SubDepartmentModel;