var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var customerUserSchema = mongoose.Schema({

    local: {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        password: String,
    }

});

// methods ======================
// generating a hash
customerUserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
customerUserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('CustomerUser', customerUserSchema);
