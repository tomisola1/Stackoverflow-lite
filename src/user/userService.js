const model = require('../../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const secret = process.env.JWT_SECRET;
const days = process.env.JWT_DAYS;

const register = async(body) => {
    try {
        const {fullName, email, password} = body;
        const existingUser = await model.User.findOne({where:{email:email}});
        if(existingUser){
            return {
                message:'User already exists'
            }
        }
        const salt = await bcrypt.genSalt(10);   
        const userPassword = bcrypt.hashSync(password, salt);
        const newUser = {
            fullName,
            email,
            password:userPassword
        }
        const createdUser = await model.User.create(newUser);
        return {
            message:'User created successfully',
            data:createdUser
        }
    } catch (error) {
        console.log(error)
    }
    
};

const login = async(body) => {
    try {
        const {email, password} = body;
        const registeredUser = await model.User.findOne({where:{email:email}});
        if(!registeredUser){
            return {
                status:404,
                message:'User needs to be registered.'
            }
        }
        const registeredUserPassword = await bcrypt.compare(password, registeredUser.password);
        if(!registeredUserPassword){
            return {
                status:400,
                message:'Incorrect details. Try again.'
            }
        }
        const token = jwt.sign(registeredUser.dataValues, secret,{
            expiresIn:days
        });
        return {
            status:200,
            message:'Login successful.',
            token:token
        }
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    register,
    login
};


