import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
})
var userModel = mongoose.model("nameSchema", nameSchema);
export default userModel;