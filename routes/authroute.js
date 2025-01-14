import express from "express"
import { SignIn, SignUp,getAllUser } from "../controller/authcontrol.js"
const route = express.Router()


route.post("/signup",SignUp)
route.get("/getuser",getAllUser)
route.post("/sigin",SignIn)
// route.post("/signin",(res,req)=>{
//     res.render("signin")
// })
// route.post("/signup",(res,req)=>{
//         res.render("signin")

// })

export default route
