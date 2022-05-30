const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET;

const auth = async(req, res, next) => {
    try {
       const token = req.headers.authorization.split(' ')[1];
       if(!token){
          return res.status(401).send('Unauthorized user')
       }
       const verifiedUser = jwt.verify(token, secret);
       if(!verifiedUser){
          return res.status(401).send(error)
       }
       res.send("Successfully verified")
       return next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = auth;