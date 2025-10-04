const express = require('express');
const { authFoodPartnerMiddleware } = require('../Middleware/auth.middleware');
const foodController = require('../controller/food.controller');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
});


const router = express.Router();





router.post('/',authFoodPartnerMiddleware,
    upload.single('FoodVideo'),
    foodController.createFood);

module.exports = router;