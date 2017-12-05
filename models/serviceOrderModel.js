const mongoose = require("mongoose");
var Schema = mongoose.Schema,

  ServiceOrderSchema = new Schema({
    cusFirstName: String,
    cusLastName: String,
    cusPhoneNumber: String,
    cusEmail: String,
    cusCarVin: String,
    cusCarMake: String,
    cusCarModel: String,
    cusCarYear: String,
    cusCarService: Array,
    cusAttendant: String,
    status: String,
    location: String,
    notes: Array

  }, {
    timestamps: {
      createdAt: 'created_at'
    }
  });


mongoose.model("ServiceOrder", ServiceOrderSchema);

// Export the model
module.exports = mongoose.model("ServiceOrder", ServiceOrderSchema);
