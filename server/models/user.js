const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  quotes: { type: String },
  school: { type: String, require: true },
  year: { type: String, require: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", require: true },
  major: { type: String, require: true },
  projects: {type: String},
  strength: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  weakness: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  hobbies: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  lab: { type: mongoose.Schema.Types.ObjectId, ref: "Lab" },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  languages: [{
    type: Number
  }],
  skills: [
    { name: Number }
  ],
  softskills: [{
    name: Number
  }],
  scores: [{
    name: Number
  }],
  address: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  height: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  weight: {
    description1: String,
    isVisible: { type: Boolean, default: false }
  },
  role: {type: String, default: 'user'}
});

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model("User", userSchema)