const {register, login} = require("./userService.js");

const registerUser = async(req, res) => {
    try {
        const payload = req.body
        const newUser = await register(payload)
        return res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async(req, res) => {
    try {
        const payload = req.body
        const User = await login(payload)
        res.status(200).json(User)
        return
    } catch (error) {
        console.log(error);
    }
}

const logoutUser = async(req, res) => {
    try {
        req.user.token = req.user.token.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.send('Logged out')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};