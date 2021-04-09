const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const subjectSchema = new mongoose.Schema({
    name: { type: String, require: true },
});

subjectSchema.plugin(uniqueValidator);


module.exports = mongoose.model("Subject", subjectSchema)