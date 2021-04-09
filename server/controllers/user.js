const User = require("../models/user")

exports.createUser = (req, res, next) => {

    const  user = new User({
        email: "canh@gmail.com"
    })

    user.save().then(user => console.log(user), err => console.log(err))
}