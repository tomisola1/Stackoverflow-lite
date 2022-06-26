const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET;

const auth = async(req, res, next) => {
    try {
       const token = req.headers.authorization.split(' ')[1];
       if(!token){
          res.status(401).send('Unauthorized user')
       }
       if(token){
         jwt.verify(token, secret, (error, decoded) => {
         if (error) {
             return res.status(401).send('The Token provided is invalid')
             }
             req.user = decoded;
         })
       }
       next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = auth;