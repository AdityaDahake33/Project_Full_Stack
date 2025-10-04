const foodModel = require('../modules/food.model'); 



async function createFood(req,res){

    console.log(req.foodPartner);

    console.log(req.body);
    console.log(req.file);

    res.send({message:"Food Created Successfully"});
}

module.exports = {
    createFood,
}
