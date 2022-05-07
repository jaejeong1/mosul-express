import mongoose from "mongoose";

 export default function boardModel(mongoose) {
     const boardSchema = mongoose.Schema({
         id: String,
         area: String,
         address: String,
         phone: String
     })

     return mongoose.model('Board', boardSchema)
 } 