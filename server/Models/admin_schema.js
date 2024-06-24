const mongoose = require('mongoose');
const {Schema} = mongoose
const adminSchema=new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    password:{type:String},
    profile:{type:String}
})
module.exports=mongoose.model("admin",adminSchema)