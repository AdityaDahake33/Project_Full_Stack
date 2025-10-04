const mongoose = require('mongoose');
const foodPartnerModel = require('./foodpartner.model');

const foodSchema = new mongoose.Schema({
    FoodName:{
        type:String,
        required: true
    },
    FoodVideo:{
        type:String,
        required: true
    },
    FoodDescription:{
        type:String,
    },
    FoodPrice:{
        type:Number,
        required: true
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner",
        required: true
    }
})

const foodModel = mongoose.model("food",foodSchema);

module.exports = foodModel;
