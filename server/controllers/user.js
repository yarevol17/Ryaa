const User = require("../models/user");

exports.createUser = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  user.save().then(
    (user) => {
      res.status(201).json({ _id: user._id });
    },
    (err) => {
      res.status(500).json({ msg: "loi" });
    }
  );
};

exports.updateUser = (req, res, next) => {
  const email = req.params.email;
  console.log(email)
  console.log(req.body);

  const displayname = req.body.displayname;
  const quotes = req.body.quotes;
  const school = req.body.school;
  const year = req.body.year;
  const classs = req.body.classs;
  const major = req.body.major;
  const projects = req.body.projects;
  const strength = req.body.strength;
  const weakness = req.body.weakness;
  const hobbies = req.body.hobbies;
  const lab = req.body.lab;
  const professor = req.body.professor;
  const languages = req.body.languages;
  const skills = req.body.skills;
  const softskills = req.body.softskills;
  const subjects = req.body.subjects;
  const address = req.body.address;
  const height = req.body.height;
  const weight = req.body.weight;
  User.updateOne(
    { email: email },
    {
      displayname: displayname,
      quotes: quotes,
      school: school,
      year: year,
      classs: classs,
      major: major,
      projects: projects,
      strength: strength,
      weakness: weakness,
      hobbies: hobbies,
      lab: lab,
      professor: professor,
      languages: languages,
      skills: skills,
      softskills: softskills,
      subjects: subjects,
      address: address,
      height: height,
      weight: weight,
    }
  ).then(
    (user) => {
      res.status(200).json(user);
    },
    (err) => {
      console.log(err);
      res.status(500).json(err);
    }
  );
};

//   exports.updateUser = (req, res, next) => {
//     const email = req.param.email;
//     // const displayname = req.body.displayname;

//     // const quotes = req.body.quotes;
//     const school = req.body.school;
//     // const year = req.body.year;
//     // const classs = req.body.class;
//     // const major = req.body.major;
//     // const projects = req.body.projects;
//     // const strength = req.body.strength;
//     // const weakness = req.body.weakness;
//     // const hobbies = req.body.hobbies;
//     // const lab = req.body.lab;
//     // const professor = req.body.professor;
//     // const languages = req.body.languages;
//     // const skills = req.body.skills;
//     // const softskills = req.body.softskills;
//     // const subjects = req.body.subjects;
//     // const address = req.body.address;
//     // const height = req.body.height;
//     // const weight = req.body.weight;

//     User.updateOne(
//       { email: email },
//       {
//         $push:{school : school}
//       },
//     //      {quotes : quotes,
//     //      school : school,
//     //      year : year,
//     //      classs : classs,
//     //      major : major,
//     //      projects : projects,
//     //      strength : strength,
//     //      weakness : weakness,
//     //      hobbies : hobbies,
//     //      lab : lab,
//     //      professor : professor,
//     //      languages : languages,
//     //      skills : skills,
//     //      softskills : softskills,
//     //      subjects : subjects,
//     //      address : address,
//     //      height : height,
//     //      weight : weight,
//     //     },
//       {
//         new: true
//       }
//     ).then(user => {
//         console.log(quotes);
//         console.log(user);

//         res.status(201).json(user)

//     }, err => {
//         res.status(500).json(err)
//     })
//   };

exports.getUser = (req, res, next) => {
  User.find().then(
    (user) => {
      res.status(200).json(user);
    },
    (err) => {
      res.status(500).json({ msg: "loi" });
    }
  );
};

exports.getUserbyEmail = (req, res, next) => {
  const email = req.body.email;
  User.findOne({ email: email })
    .populate("_id")
    .then(
      (user) => {
        return res.status(200).json(user._id);
      },
      (err) => {
        return res.status(500).json({ err });
      }
    );
};
