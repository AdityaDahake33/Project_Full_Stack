const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    FoodName:{
        type:String,
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
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner",
    }
})

const foodModel = mongoose.model("food",foodSchema);

module.exports = foodModel;
