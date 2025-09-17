const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const foodpartnerModel = require("../models/foodparentner.model")




async function registerUser(req, res) {
      const { FullName, Email, Password } = req.body;

      const isUserAlready = await UserModel.findOne({
        Email
    });
      if(isUserAlready){
        return res.status(400).json({
            message: "User already exists"
        });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);


      const user = await UserModel.create({
        FullName,
        Email,
        Password: hashedPassword
      })

      const token = jwt.sign({
        id: user._id,
      },
      process.env.JWT_SECRET)

      res.cookie("token", token)

      res.status(201).json({
        message: "User created successfully",
        user: {
            _id: user._id,
          FullName: user.FullName,
          Email: user.Email,
        }
      })
      

}

async function loginUser(req, res) {
    
    const { Email, Password } = req.body;

    const user = await UserModel.findOne({
        Email
    })

    if (!user) {
        return res.status(400).json({
            message: "Invalid User or Password"
        })
    }
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid User or Password"
        })
    }

    const token = jwt.sign({
        id: user._id,
      },
      process.env.JWT_SECRET)

      res.cookie("token", token)

      res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
          FullName: user.FullName,
          Email: user.Email,
        }
      })
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    })
}

async function registerFoodPartner(req, res){
    const { RestaurantName, BusinessEmail, PhoneNumber, Address, Password } = req.body;

    const isAccountAlreadyExists = await foodpartnerModel.findOne({
        Email: BusinessEmail
    })

        if(isAccountAlreadyExists){
            return res.status(400).json({
                message: "Food partner account already exists"
            })
        }

    const hashedPassword = await bcrypt.hash(Password,10);

    const foodparentner = await foodpartnerModel.create({
        RestaurantName,
        BusinessEmail,
        PhoneNumber,
        Address,
        Password: hashedPassword,


    })

    const token = jwt.sign({
        id: foodpartnerModel._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "Food partner registered Successfully",
        foodPartner: {
            _id: foodparentner._id,
            Email: foodparentner.Email,
            Name: foodparentner.Name
        }
    })
}

async function loginFoodPartner(req, res){
    const {Email, Password} = req.body;

    const foodpartner = await foodpartnerModel.findOne({
        Email
    })

    if(!foodpartner){
        return res.status(400).json({
            message: "Invalid Food Partner or Password"
        })
    }

    const isPasswordValid = await bcrypt.compare(Password, foodpartner.Password);
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid Food Partner or Password"
        })
    }

    const token = jwt.sign({
        id: foodpartner._id,
      },
      process.env.JWT_SECRET)

      res.cookie("token", token)

      res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
            _id: foodpartner._id,
          Name: foodpartner.Name,
          Email: foodpartner.Email,
        }
      })
}

function logoutFoodPartner(req, res){
    res.clearCookie("token");
    res.status(200).json({
        message: "Food Partner logged out successfully"
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