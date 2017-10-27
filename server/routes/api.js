const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
const customer = require("../../models/customerModel.js");
// Set mongoose to leverage built in JavaScript ES6 Promises

// Connect
const db = "mongodb://localhost/Customer";
useMongoClient: true;
mongoose.Promise = global.Promise;
//connect and show any mongoose errors
mongoose.connect(db, function(err) {
  
  if(err) {
      console.log('Error connecting');
  }
  else{
    console.log('Mongoose connection successful.')
    
  }
});


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
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
        console.log(req.body);
        var newCustomer = new customer();
        newCustomer.fName = req.body.fname;
        newCustomer.lName = req.body.lName;
        newCustomer.phNumber = req.body.phNumber;
        newCustomer.email = req.body.email;
        newCustomer.make = req.body.make;
        newCustomer.model = req.body.model;
        newCustomer.vin = req.body.vin;
        newCustomer.year = req.body.year;
        newCustomer.engine = req.body.engine;
        newCustomer.tire = req.body.tire;
        newCustomer.history = req.body.history;
        newCustomer.save(function(err, customer) {
            if(err) {
                console.log('Error inserting the new customer');
            } else {
                res.json(customer);
            }
        });
    });

module.exports = router;