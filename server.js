import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./mongodb.js"
import route from  "./routes/authroute.js" 


const app = express()

dotenv.config()

 const port = process.env.PORT||4000;
 app.use(express.json());


 ConnectDB()

 app.use (express.urlencoded({extended:true}))
 
 app.set ("view engine","ejs")

 app.use("/auth",route)

 app.get('./', (req,res)=>{
    res.render('home')

 })
 app.listen(port,()=>{
    console.log("server loaded port")
 })