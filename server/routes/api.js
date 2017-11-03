const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const mongoose = require("mongoose");
const customer = require("../../models/customerModel.js");
const ServiceOrder = require("../../models/serviceOrderModel.js");
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
        newCustomer.fName = req.body.fName;
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


        // This will get all customers in db
    router.get("/all", function(req, res) {
      console.log("Got here");
      customer.find().exec(function(error, customers) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Or send the customers to the browser as a json object
        else {
        res.json(customers);
        }
      });
    });

    // Grab a customer by phone number
    router.get("/all/:id", function(req, res) {
      console.log("Got here");
      // Using the phone number passed in the id parameter
      customer.find({ "phNumber": req.params.id })
      // ..and populate all of the customer associated with it
      // now, execute our query
      .exec(function(error, customers) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Otherwise, send the customer to the browser as a json object
        else {
          console.log("Got Here Also");
          console.log(customers);
          res.json(customers);

        }
      });
    });

      //Create Service Order
         router.post('/addserviceorder', function(req, res) {
        console.log('Posting a New Service Order');
        console.log(req.body);
        var newServiceOrder = new ServiceOrder(req.body);
        newServiceOrder.save(function(err, customer) {
            if(err) {
                console.log('Error inserting the new service order');
            } else {
                res.json(customer);
            }
        });
    });

                 // This will get all service orders in db
    router.get("/allserviceorders", function(req, res) {
      console.log("Got here");
      ServiceOrder.find().exec(function(error, orders) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Or send the orders to the browser as a json object
        else {
        res.json(orders);
        }
      });
    });

    // Grab a service order by id
    router.get("/allserviceorders/:id", function(req, res) {
      console.log("Got here");
      // Using the phone number passed in the id parameter
      ServiceOrder.find({ "_id": req.params.id })
      // ..and populate all of the customer associated with it
      // now, execute our query
      .exec(function(error, orders) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Otherwise, send the customer to the browser as a json object
        else {
          console.log("Got Here Also");
          console.log(orders);
          res.json(orders);

        }
      });
    });

    //Update service order info
    router.put("/updateserviceorder/:id", function(req, res) {
      var info = req.body;
      console.log("here is the info");
      console.log(info);
      ServiceOrder.findByIdAndUpdate(req.params.id, {$set: info}, {new: true}, function(err, order) {
        if (err) return handleError(err);
        res.send(order);
      });
    });

    //Add Note to service order
    router.put("/addserviceordernote/:id", function(req, res) {
      var info = req.body;
      console.log("here is the info");
      console.log(info);
      ServiceOrder.findByIdAndUpdate(req.params.id, {$push: info}, function(err, order) {
        if (err) return handleError(err);
        console.log("sending back order");
        res.send(order);
      });
    });



module.exports = router;
