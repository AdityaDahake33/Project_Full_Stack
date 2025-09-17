const foodModel = require('../models/food.model');
const storageService = require('../Services/storage.services'); 
const { v4:uuid } = require('uuid') 

const createFoodItem = (req, res) => {
    // Implement your logic for creating a food item here
    res.status(200).json({ message: 'Food item created successfully!' });
};

async function createFood(req, res){
   

    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())

    const foodItem = await foodModel.create({ 
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({ 
        message: 'Food created successfully!',
        food: foodItem
     });
}

async function getFoodItems(req , res){
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message:"Food item fetched Succesfully",
        food: foodItems
    })
}


module.exports = {
    createFoodItem,
    createFood,
    getFoodItems
};