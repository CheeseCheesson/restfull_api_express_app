import mongoose from "mongoose"

const Post = new mongoose.Schema({
    "brand":{type:String, required:true},
    "model":{type:String, required:true},
    "color":{type:String, required:true},
    "price":{type:String, required:true},
    "picture":{type:String}
})

export default mongoose.model("Post", Post)
