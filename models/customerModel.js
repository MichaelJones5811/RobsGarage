const mongoose = require("mongoose");
var Schema = mongoose.Schema,


CustomerSchema = new Schema({
fName     : String,
lName     : String,
phNumber  : String,
email     : String,
make      : String,
model      : String,
vin      : String,
year      : String,
engine      : String,
tire      : String,
history      : String,

});

 mongoose.model("Customer", CustomerSchema);

// Export the model
module.exports =  mongoose.model("Customer", CustomerSchema);