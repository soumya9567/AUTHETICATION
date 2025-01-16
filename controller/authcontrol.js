import User from "../model/authModel.js"
import bcrypt, { compare } from "bcrypt"


// export const Signupform =async(req,res)=>{
//   return res.render('signup')
// }

export const SignUp = async(req,res)=>{

    console.log(req.body,"request body")


    const {email, name, password}=req.body




    try {
      const ExistingUser = await User.findOne({email:email})
      if(!ExistingUser){

        const salt = await bcrypt.genSalt()
        console.log(salt,"salt created")

        const hashedpassword= await bcrypt.hash(password,salt)
        console.log(hashedpassword,"hashed password")

        const NewUser = await new User({name,email,password:hashedpassword})
        await NewUser.save()
       

        return res.status(200).json({success:true,message:"user registered successfully",user:NewUser})
      
      }else{
        return res.status(500).json("user already exist")
      }
    //  return res.json({message:"Req body",data:req.body})
        
    } catch (error) {
       return res.status(500).json({ success:false, message:"failed for sign up "})
        console.log(error)
    }
}

//function of getting all users

export const getAllUser= async(req,res)=>{
  console.log(req.body,"request body")

  const {name,email,password} = req.body

  try {

    const allUser = await User.find({email:email})
    return res.status(200).json({success:true,message:"successfully get all the users",allUser})
    
  } catch (error) {
     return res.status(500).json({ success:false, message:"failed for sign up " })
        console.log(error)
  }
}

//sign in function


export const SignIn = async(req,res)=>{
  console.log(req.body)

  const{email,password} = req.body


try {
  const ExistingUser = await User.findOne({email:email})
  console.log(ExistingUser,"existing user")
  // return res.status(200).json({success:true,message:"user login successfully",loginUser})

  if(ExistingUser){
    const matchedpassword = await bcrypt.compare(password,ExistingUser.password)


    if(matchedpassword){
     return res.status(200).json({success:true,message:"login successfully",user:ExistingUser})
    }
    else{
      return res.status(404).json({success:false,message:"login not successfull"})
    }
  }
  
} catch (error) {
  return res.status(500).json({success:false,message:"failed to signin"})

  
}
}