const express = require('express');
const foodController = require('../controllers/food.controller');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../Middleware/auth.middleware'); // Add this line

const upload = multer({
    storage:multer.memoryStorage(),
})

router.post('/',  
    authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),
    foodController.createFood
); // Use the createFood function from the controller
 
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)

module.exports = router;