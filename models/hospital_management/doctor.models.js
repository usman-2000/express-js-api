import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    age:{
        type :Number,
        required: true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    university:{
        type: String,
        required:true
    }
},{timestamps:true})

export const Doctor = mongoose.model('Doctor',doctorSchema)