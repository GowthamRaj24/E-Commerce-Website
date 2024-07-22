const express = require('express');
const routes = express.Router();
const addOrder = require('../controllers/orders/addOrder');

routes
    .post('/addOrder', addOrder.addOrder);


exports.route = routes;