const foodpartner = require('../models/foodparentner.model') // Corrected filename
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model'); // Add this line to import userModel

async function authFoodPartnerMiddleware(req, res, next){

    const token = req.cookies.token;
    console.log('Token from cookie:', token); // Debugging line

    if(!token){
        return res.status(401).json({
            message: 'Please Login First'
        })
    }

    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       console.log('Decoded JWT:', decoded); // Debugging line

       const foundFoodPartner = await foodpartner.findById(decoded.id);
       console.log('Found Food Partner from DB:', foundFoodPartner); // Debugging line

       if (!foundFoodPartner) {
           return res.status(401).json({
               message: 'Food Partner not found'
           });
       }

       req.foodPartner = foundFoodPartner;
       console.log('req.foodPartner after middleware:', req.foodPartner); // Debugging line

       next();
       }

    catch(err){
        console.error('Authentication error:', err); // Debugging line
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }
}

async function authUserMiddleware(req, res, next){

    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message: "PLease login First"
        })
    }
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            const user = await userModel.findById(decoded.id); // Corrected 'decoder.id' to 'decoded.id'

            req.user = user
            next(); // Add next() to pass control to the next middleware/route handler
        }
    catch(err) {
        return res.status(401).json({
            message: 'Invalid Token'
        });
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
}
