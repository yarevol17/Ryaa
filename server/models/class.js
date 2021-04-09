const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const classSchema = new mongoose.Schema({
    name: { type: String, require: true },
    year: { type: mongoose.Schema.Types.ObjectId, ref: "Year", require: true },
    professor: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    students: [
        {type: mongoose.Schema.Types.ObjectId, ref: "User" }
]
});

classSchema.plugin(uniqueValidator);


module.exports = mongoose.model("Class", classSchema)