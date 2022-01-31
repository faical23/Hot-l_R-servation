const { User } = require("../../models/index")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
module.exports = {
    login: (req, res) => {
        // Form validation
        const email = req.body.email;
        const password = req.body.password;
        // console.log(password);
        // Find user by email
        User.findOne({ 'email': email })
            .then(user => {
                // Check if user exists
                if (!user) {
                    return res.status(404).send({
                        message: "Email not found"
                    });
                } else {
                    // Check password
                    bcrypt.compare(password, user.password)
                        .then(isMatch => {
                            // console.log(isMatch)
                            if (isMatch) {
                                // check if the user's email verified or not yet 
                                // Create JWT Payload
                                const { password, ...rest } = user._doc;
                                // Sign token
                                jwt.sign(
                                    { user: rest },
                                    "secret",
                                    {
                                        expiresIn: "1h"
                                    },
                                    (err, token) => {
                                        if (err) {
                                            res.status(500).send({
                                                message: "Error while creating token"
                                            });
                                        } else {
                                            res.status(200).send({
                                                token: "Bearer " + token,
                                                user:rest
                                            });
                                        }
                                    }
                                );

                            } else {
                                return res.status(400).send({
                                    message: "Password incorrect"
                                });
                            }
                        })
                        .catch(() => res.status(500).send({
                            message: "Error while coparing passwords"
                        }));
                }
            })
            .catch(() => res.status(500).send({
                message: "Error while searching for user in db"
            }));
    },
    register: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(async (user) => {
                if (user) {
                    return res.status(422).send({
                        message: "Email already used!",
                    });
                }
                const UserModel = await User(req.body);
                // generate salt to hash password
                const salt = await bcrypt.genSalt(10);
                // now we set user password to hashed password
                UserModel.password = await bcrypt.hash(UserModel.password, salt);

                UserModel.save();
                const { password, ...rest } = UserModel._doc;
                // Sign token
                jwt.sign(
                    { user: rest },
                    "secret",
                    {
                        expiresIn: "1h"
                    },
                    (err, token) => {
                        if (err) {
                            res.status(500).send({
                                message: "Error while creating token"
                            });
                        } else {
                            res.status(200).send({
                                token: "Bearer " + token,
                                user:rest
                            });
                        }
                    }
                );
         
            })
            .catch((err) => {
                return res.status(500).json({ error: err });
            });

    }
}