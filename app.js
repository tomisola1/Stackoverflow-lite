const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const userRoute = require("./src/routes/userRoutes.js");
const questionRoute = require("./src/routes/questionRoute")

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/user', userRoute)
app.use('/question', questionRoute)

const port = process.env.PORT || '6000';
app.listen(port, () =>{
   console.log(`Server is listening on port ${port}`)
});

module.exports = app;