import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import userRoute from "./src/user/userRoute.js";

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user', userRoute)

const port = process.env.PORT || '6000';
app.listen(port, () =>{
   console.log(`Server is listening on port ${port}`)
});

export default app;