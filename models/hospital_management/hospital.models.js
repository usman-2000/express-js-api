import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address_line_1:{
        type:String,
        required:true
    },
    address_line_2:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specialized_in:[{
        type: String
    }]
},{timestamps:true})

export const Hospital = mongoose.model('Hospital',hospitalSchema)