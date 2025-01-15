import express from "express"
import { SignIn, SignUp,getAllUser } from "../controller/authcontrol.js"
const route = express.Router()




route.get("/signup",(req,res)=>{
    res.render("signup")

})

route.get("/signin",(req,res)=>{
    res.render("signin")
})
// route.get("/signup",Signupform)
route.post("/signup",SignUp)
route.get("/getuser",getAllUser)
route.post("/sigin",SignIn)




export default route
