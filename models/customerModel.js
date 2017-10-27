const mongoose = require("mongoose");
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
fName     : String,
lName     : String,
phNumber  : ObjectId,
email     : String

});

var Customer = mongoose.model("Customer", CustomerSchema);

// Export the model
module.exports = Customer;