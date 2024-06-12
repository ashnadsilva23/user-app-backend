const mongoose=require("mongoose")
const schema =mongoose.Schema({
    "name":String,
    "dob":String,
    "bloodGroup":String,
    "mobileNo":String,
    "address":String,
    "pincode":String,
    "district":String,
    "place":String,
    "email":String,
    "userName":String,
    "passward":String


   
})

let usermodel=mongoose.model("users",schema)
module.exports={usermodel}