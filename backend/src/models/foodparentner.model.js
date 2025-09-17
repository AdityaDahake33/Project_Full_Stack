const mongoose = require('mongoose');

const foodpartnerSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        required: true
    },
    BusinessEmail: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true
    }
})


const foodpartnerModel = mongoose.model("foodpartner",foodpartnerSchema);

module.exports = foodpartnerModel;