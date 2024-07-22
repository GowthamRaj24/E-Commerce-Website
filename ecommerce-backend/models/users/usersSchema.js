const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId : "String",
    displayName : "String" ,
    email : "String" ,
    password : "String" ,
    image : "String" ,
    address : "array" ,
    phoneNumber : "String" ,
    cartItems : "array" ,
})

module.exports = mongoose.model('users' , userSchema);
