const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const skillSchema = new mongoose.Schema({
    name: { type: String, require: true },
});

skillSchema.plugin(uniqueValidator);


module.exports = mongoose.model("Skill", skillSchema)