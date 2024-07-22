const usersSchema = require('../../models/users/usersSchema');

const fetchingUser = async (req, res) => {
    try{
        const token = window.localStorage.getItem("token");
        const user = await usersSchema.findOne({token : token});
        res.status(200).json({message : "User fetched successfully" , user : user});
    }
    catch(err){
        res.status(500).json({message : "Error Fetching User"});
    }
}

exports.fetchingUser = fetchingUser;