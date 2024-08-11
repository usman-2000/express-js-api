import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required:true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    productImage : {
        type : String
    },
    price:{
        type: Number,
        default:0,
        required : true
    },
    stock:{
        type: Number,
        default: 0
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema )