const mongoose = require('mongoose');

const foodpartnerSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        unique: true
    }
})


const foodpartnerModel = mongoose.model("foodpartner",foodpartnerSchema);

module.exports = foodpartnerModel;