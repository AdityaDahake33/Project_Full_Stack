const express = require('express');
const { authFoodMiddleware } = require('../Middleware/auth.middleware');
const { authFoodPartnerMiddleware } = require('../Middleware/auth.middleware');
const foodController = require('../controller/food.controller');
const multer = require('multer');



const upload = multer({
    storage: multer.memoryStorage(),
});


const router = express.Router();




// POST /api/food/

router.post('/',
    authFoodPartnerMiddleware,
    upload.single('FoodVideo'),
    foodController.createFood);

// GET /api/food/
router.get('/',
    authFoodPartnerMiddleware,
    foodController.getFood);


module.exports = router;