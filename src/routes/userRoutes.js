const express = require("express");
const auth = require("../middleware/authorization.js");
const {registerUser, loginUser, logoutUser} = require("../user/userController.js");

const route = express.Router();

route.post('/register', registerUser);
route.post('/login', loginUser);
route.get('/logout', auth, logoutUser)


module.exports = route;