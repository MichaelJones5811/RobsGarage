const mongoose = require("mongoose");
var Schema = mongoose.Schema,

  CustomerSchema = new Schema({
    customer_id: String,
    fName: {
      type: String,
      required: true
    },
    lName:{
      type: String,
      required: true
    },
    phNumber:{
      type: String,
      required: true
    },
    email: String,
    make: String,
    model: String,
    vin: String,
    year: String,
    engine: String,
    tire: String,
    history: String
  });



    


mongoose.model("Customer", CustomerSchema);

// Export the model
module.exports = mongoose.model("Customer", CustomerSchema);
