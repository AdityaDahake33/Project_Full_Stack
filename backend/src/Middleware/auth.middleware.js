const foodPartnerModel = require('../modules/foodpartner.model');
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Please Login First"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decoded.id);
        
        req.foodPartner = foodPartner;
        next();
    }catch(err){
        return res.status(401).json({message:"Please Login First"});
    }
}

async function authFoodMiddleware(req,res,next){

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Please Login First"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const food = await foodModel.findById(decoded.id);
        req.food = food;
        next();
    }catch(err){
        return res.status(401).json({message:"Please Login First"});
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authFoodMiddleware,
};  
