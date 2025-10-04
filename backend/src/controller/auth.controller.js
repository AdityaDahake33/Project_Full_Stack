const UserModel = require('../modules/user.module');
const foodPartnerModel = require('../modules/foodpartner.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



async function registerUser(req,res){
    const {FirstName,LastName,email,password} = req.body;

    const isUserAlreadyExist = await UserModel.findOne({email});
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exist"
        })
    }
    const hashPassword = await bcrypt.hash(password,10);

    const user = await UserModel.create({
        FirstName,
        LastName,
        email,
        password:hashPassword
    })
    const token = jwt.sign({
        userId:user._id
    },process.env.JWT_SECRET);

    res.status(201).json({
        message:"User registered successfully",
        user: {
           _id:user._id,
           FirstName: user.FirstName,
           LastName: user.LastName,
           email: user.email
        }
    })
}

async function loginUser(req,res){
    const {email,password} = req.body;

    const user = await UserModel.findOne({email});
    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid password"
        })
    }
    const token = jwt.sign({
        userId:user._id
    },process.env.JWT_SECRET);

    res.cookie("token",token)

    res.status(200).json({
        message:"User logged in Successfully",
        user:{
           _id:user._id,
           email: user.email
        }
    })

}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out Successfully"
    })
}

async function registerFoodPartner(req,res){
    const {
        BusinessName,
        BusinessEmail,
        BusinessPassword,
        BusinessPhone,
        BusinessAddress,
        BusinessCity,
        BusinessState,
    } = req.body;
    const isFoodPartnerAlreadyExist = await foodPartnerModel.findOne({BusinessEmail});
    if(isFoodPartnerAlreadyExist){
        return res.status(400).json({
            message:"Food Partner already exist"
        })
    }
    const hashPassword = await bcrypt.hash(BusinessPassword,10);



    const foodPartner = await foodPartnerModel.create({
        BusinessName,
        BusinessEmail,
        BusinessPassword:hashPassword,
        BusinessPhone,
        BusinessAddress,
        BusinessCity,
        BusinessState,
    })

    const token = jwt.sign({
        foodPartnerId:foodPartner._id
    },process.env.JWT_SECRET);
    res.cookie("token",token)

    res.status(201).json({
        message:"Food Partner registered successfully",
        foodPartner: {
           _id:foodPartner._id,
           BusinessName: foodPartner.BusinessName,
           BusinessEmail: foodPartner.BusinessEmail,
           BusinessPhone: foodPartner.BusinessPhone,
           BusinessAddress: foodPartner.BusinessAddress,
           BusinessCity: foodPartner.BusinessCity,
           BusinessState: foodPartner.BusinessState,
        }
    })

}

async function loginFoodPartner(req,res){
    const {BusinessEmail,BusinessPassword} = req.body;

    const foodPartner = await foodPartnerModel.findOne({BusinessEmail});
    if(!foodPartner){
        return res.status(400).json({
            message:"Food Partner not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(BusinessPassword,foodPartner.BusinessPassword);
    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid password"
        })
    }

    const token = jwt.sign({
        foodPartnerId:foodPartner._id
    },process.env.JWT_SECRET);
    res.cookie("token",token)


    res.status(200).json({
        message:"Food Partner logged in Successfully",
        foodPartner:{
           _id:foodPartner._id,
           BusinessName: foodPartner.BusinessName,
           BusinessEmail: foodPartner.BusinessEmail,
           BusinessPhone: foodPartner.BusinessPhone,
           BusinessAddress: foodPartner.BusinessAddress,
           BusinessCity: foodPartner.BusinessCity,

        }
    })
}

async function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"Food Partner logged out Successfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}

