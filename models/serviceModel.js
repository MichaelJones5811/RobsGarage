const mongoose = require("mongoose");
var Schema = mongoose.Schema,

ServiceSchema = new Schema ({
    type : String,
    price: Number,
    desc: String,




});

mongoose.model("service", ServiceSchema);

module.exports = mongoose.model("service", ServiceSchema);
