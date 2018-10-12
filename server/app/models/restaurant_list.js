var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var RestaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required:true
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('restaurant_list' ,RestaurantSchema);
