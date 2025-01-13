import mongoose from  "mongoose"

const ConnectDB =  async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("mongodb connected")
        })
        

        
    } catch (error) {
        console.log("error loading mongodb")
        
    }
}
export default ConnectDB;