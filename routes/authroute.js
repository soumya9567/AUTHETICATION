import express from "express"
import { SignUp } from "../controller/authcontrol.js"
const route = express.Router()


route.post("/signup",SignUp)
// route.post("/signin",(res,req)=>{
//     res.render("signin")
// })
// route.post("/signup",(res,req)=>{
//         res.render("signin")

// })

export default route
