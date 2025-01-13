import User from "../model/authModel.js"

export const SignUp = async(req,res)=>{
    console.log(req.body,"request body")


    const {email, name, password}=req.body




    try {
      const ExistingUser = await User.findOne({email})
      if(!ExistingUser){
        const NewUser = await new User({name,email,password})
        await NewUser.save()
        res.status(200).json({success:true,message:"user registered successfully",NewUser})

      }else{
        res.status(500).json("user already exist")
      }
    res.json({message:"Req body",data:req.body})
        
    } catch (error) {
        res.status(500).json({ success:false, message:"failed for sign up " })
        console.log(error)
    }
}