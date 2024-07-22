const usersSchema = require('../../models/users/usersSchema');

const loginUser = async (req, res) => {
    try {
        const user = await usersSchema.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (user) {
            res.status(200).json({
                message: "Login Successful"
            });
        } else {
            res.status(200).json({
                message: "Invalid Credentials"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

exports.loginUser = loginUser;