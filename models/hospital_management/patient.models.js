import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    age:{
        type :Number,
        required: true
    },
    blood_group:{
        type: String,
        required:true
    },
    gender:{
type: String,
enum:['M',"F",'O']
    },
    last_disease:{
        type:String,
        required: true
    }
},{timestamps:true})

export const Patient = mongoose.model('Patient',patientSchema)