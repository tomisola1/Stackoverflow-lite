import user from "../../models/user.js";
import bcrypt from "bcrypt";

export const register = async(req, res) => {
    try {
        const {fullname, email, password} = req.body;
        console.log(req.body.fullname);
        const existingUser = await user.findOne({where:{email:email}})
        if(existingUser){
            res.send('User already exists')
        }
        const salt = await bcrypt.genSalt(10)   
        const userPassword = bcrypt.hashSync(password, salt)
        const newUser = {
            fullname,
            email,
            password:userPassword
        }
        await user.create(newUser)
    } catch (error) {
        console.log(error)
    }
    
}


