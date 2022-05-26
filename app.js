const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoute = require("./src/user/userRoute.js");

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/user', userRoute)

const port = process.env.PORT || '6000';
app.listen(port, () =>{
   console.log(`Server is listening on port ${port}`)
});

module.exports = app;