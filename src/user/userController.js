import {register} from "./userService.js"

export const registerUser = async(req) => {
    try {
        const payload = req.payload
        const newUser = await register(payload, )
        return{
            statusCode:201,
            data:newUser,
            message:'User created successfully'
        }
    } catch (error) {
        console.log(error)
    }
}

// export default registerUser;