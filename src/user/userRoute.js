import express from "express";
import {registerUser}from "./userController.js";

const route = express.Router();

route.post('/register', registerUser);

export default route