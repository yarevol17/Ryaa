const Skill = require("../models/skill");
const Major = require("../models/major");
const mongoose = require("mongoose");
const { find } = require("../models/skill");

exports.createSkill = (req, res, next) => {
    const skill = new Skill({
        name: req.body.name
    })

    skill.save().then(
    skill => {
        console.log(skill);
        res.status(201).json({ _id: skill._id });
    }, 
    err => {
        console.log(err);
        res.status(500).json({ msg: "loi" })
    })
}


