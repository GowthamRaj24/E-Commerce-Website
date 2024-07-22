const express = require('express');
const routes = express.Router();
const addUser = require("../controllers/users/addUser");
const existingUser = require('../controllers/users/existingUser');
const loginUser = require('../controllers/users/loginUser');
const sendOtp = require('../controllers/users/sendOtp');
const verifyOtp = require('../controllers/users/verifyOtp');

routes
    .post('/addUser', addUser.addUser)
    .post('/existingUser', existingUser.existingUser)
    .post('/loginUser', loginUser.loginUser)
    .post('/sendOtp', sendOtp.sendOtp)
    .post('/verifyOtp', verifyOtp.verifyOtp);

exports.route = routes;