const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET;

const auth = async(req, res, next) => {
    try {
       const token = req.headers.authorization;
       if(!token){
          return res.status(401).send('Unauthorized user')
       }
       const verifiedUser = jwt.verify(token, secret);
       if(!verifiedUser){
          return res.status(401).send(error)
       }
       return res.send("Successfully verified")
    } catch (error) {
        console.log(error);
    }
    return next();
}

module.exports = auth;