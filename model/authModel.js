import mongoose from "mongoose"
// import { type } from "os";

const UserSchema = mongoose.Schema({
    name : {type:String,required:true},
    email :{type:String,required:true,unique:true},
    password:{type:String,required:true}

});

const User= mongoose.model("user",UserSchema)

export default User
