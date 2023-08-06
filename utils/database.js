import mongoose from "mongoose";

let isConnected = false;

export const connentToDb=async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("mongoDB is already connected")
        return;
    } try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true;
        console.log("mongoDB is connected")
    } catch (error) {
        console.log("mongoDB error: " + error)
        
    }

}