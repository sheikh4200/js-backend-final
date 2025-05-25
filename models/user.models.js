const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
         required:true,
        unique:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,       
    },
    avatar:{
        type:String, //url form at cloudinary
required:true,
    },
    coverImage:{
        type:String, //url form at cloudinary
        required:true,
    },
     password:{
        type:String,
        required:true,
     },
     refreshToken:{
        type:String,
        required:true 
     }

},{timestamps:true})

const User = mongoose.model('User', userSchema);
export default User;