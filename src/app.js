import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express';
import cors from "cors";
const app = express();

app.use(express.json({
    limit:"16kb"
}))
app.use(urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))
app.use(cors({
    origin: process.env.CROSS_ORIGIN,
    credentials:true,
}))
app.use(cookieParser())

// app.get("/",function(){
//     console.log(this.data);
//     console.log("hello world")
// })


 


export default app;