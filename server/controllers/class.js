const Class = require("../models/class");
const Year = require("../models/year");
const mongoose = require("mongoose");
const { find } = require("../models/class");

exports.createClass = (req, res, next) => {
  const yearId = req.body.year;
  const clas = new Class({
    name: req.body.name,
    year: yearId,
  });
  Year.updateOne(
    { _id: mongoose.Types.ObjectId(yearId) },
    {
      $push: {
        classes: clas._id,
      },
    }
  ).exec((err) => {
    console.log(err);
  });

  clas.save().then(
    (clas) => {
      return res.status(201).json({ msg: "Tạo thành công" });
    },
    (err) => {
      return res.status(500).json({ msg: "loi" });
    }
  );
};

exports.getClassesByYear = (req, res, next) => {
  Class.find({year: req.params.yearId}).then(classes => {
    return res.status(200).json(classes)
  }, err => {
    return res.status(500).json({msg: "Lỗi"})
  })
}
