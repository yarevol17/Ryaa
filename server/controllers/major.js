const Major = require("../models/major")
exports.createMajor = (req, res, next) => {
    const major = new Major({
        name: req.body.name
    })

    major.save().then(
    major => {
        console.log(major);
        res.status(201).json({ _id: major._id });
    }, 
    err => {
        console.log(err);
        res.status(500).json({ msg: "loi" })
    })
}

exports.getMajor = (req, res, next) => {
    Major.find().then(
        major => {
            console.log(major);
            res.status(200).json(major);
        }, 
        err => {
            console.log(err);
            res.status(500).json({ msg: "loi" })
        })
}

exports.addSubjectToMajor = (req, res, next) => {
    const majorId = req.params.majorId;
    const subjectId = req.body.subjectId;
    Major.updateOne(
      { _id: majorId },
      {
        $push: {
          subjects: subjectId,
        },
      }, {
        new: true
      }
    ).then(major => {
        res.status(201).json(major)
    }, err => {
        res.status(500).json(err)
    })
  };
  
  exports.getSubjectsByMajor = (req, res, next) => {
    const majorId = req.params.majorId;
    Major.findOne({_id: majorId})
    .populate('subjects', 'name')
    .then(major => {
      return res.status(200).json(major.subjects)
    }, err => {
      return res.status(500).json({msg: "Lỗi"})
    })
  }