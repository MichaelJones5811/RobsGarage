const express = require('express');
const router = express.Router();
const customer = require("../../models/customerModel.js");
const ServiceOrder = require("../../models/serviceOrderModel.js");
const passport = require("passport");

// process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/servicedashboard', // redirect to the secure profile section
        failureRedirect : '/usersignup', // redirect back to the signup page if there is an error
    }));

module.exports = router;
