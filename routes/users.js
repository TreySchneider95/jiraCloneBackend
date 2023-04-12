const express = require('express');
const router = express.Router();
const userController = require("./controllers/userController")


// /* GET users listing. */
router.get('/all', userController.all)

router.get('/one/:id', userController.getOne)

router.post('/register', userController.register); 

router.post('/login', userController.login)

module.exports = router;




