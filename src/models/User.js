import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        reuqired:true,
    },

    },
    {
        timestamps:true
    })

    //this is for the user collections in mongodb
export default mongoose.model("User",userSchema);