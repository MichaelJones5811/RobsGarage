const mongoose = require("mongoose");
var Schema = mongoose.Schema,

ServiceSchema = new Schema ({
    type :{
     type: String,
     min:[3, 'Type must be at least 3 characters long'],
     require: true
    },
    price:{ 
      type: Number,
      require: true
    },
    desc: {
     type: String,
     require: true
    }
});

mongoose.model("service", ServiceSchema);

module.exports = mongoose.model("service", ServiceSchema);
