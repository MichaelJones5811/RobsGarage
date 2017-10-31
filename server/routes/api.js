const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require("mongoose");
const Customer = require("../../models/customerModel.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect

mongoose.connect("mongodb://localhost/Customer", {useMongoClient: true});
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object'
    ? err.message
    : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get Customers

// create Customers

router.post('/addCustomer', function(req, res) {
  console.log('Posting an New Customer');
  var newCusotmer = new customer();
  newCusotmer.fName = req.body.fname;
  newCusotmer.lName = req.body.lName;
  newCusotmer.phNumber = req.body.phNumber;
  newCusotmer.email = req.body.email;
  newCusotmer.save(function(err, customer) {
    if (err) {
      console.log('Error inserting the new customer');
    } else {
      res.json(customer);
    }
  });
});

module.exports = router;