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

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/servicedashboard', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error

    }));

    //log out customer
    router.get("/logout", function(req, res) {
        req.logout();
        req.session.destroy(function(err) {
            res.redirect('/');

        });
    });

    //Get logged in user info
    router.get("/userinfo", function(req, res) {
        res.json(req.user);
      });

module.exports = router;
