const foodModel = require('../modules/food.model'); 
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');




async function createFood(req,res){

    const fileuploadResult = await storageService.uploadFile(req.file, uuid());

    const foodItem = await foodModel.create({
        FoodName: req.body.name,
        FoodPriceFoodPrice: req.body.price,
        FoodDescription: req.body.description,
        FoodVideo: fileuploadResult.url,
        foodPartner: req.foodPartner ? req.foodPartner._id : null,
    });

    res.status(201).send({
        message:"Food Created Successfully",
        food: foodItem
    });
}

async function getFood(req,res){
    const food = await foodModel.find({});
    res.status(200).send({
        message:"Food Retrieved Successfully",
        food: food
    });
}

module.exports = {
    createFood,
    getFood,
}
