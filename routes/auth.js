let express = require('express');
let router = express.Router();

let authController = require("../controllers/authController");


// Public  routes 
router.get('/login', authController.getLoginPage);
router.get('/signup', authController.getSignupPage);





module.exports = router;