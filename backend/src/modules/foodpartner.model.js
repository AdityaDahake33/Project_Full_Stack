const mongoose = require('mongoose');


const foodPartnerSchema = new mongoose.Schema({
    BusinessName: {
        type:String,
        required: true
    },
    BusinessEmail: {
        type: String,
        required: true,
        unique: true,
    },
    BusinessPassword:{
        type: String,
        required: true,
    },
    BusinessPhone:{
        type: Number,
        required: true,
    },
    BusinessAddress:{
        type: String,
        required: true,
    },
    BusinessCity:{
        type: String,
        required: true,
    },
    BusinessState:{
        type: String,
        required: true,
    }
})

const foodPartnerModel = mongoose.model("foodpartner",foodPartnerSchema);

module.exports = foodPartnerModel;
