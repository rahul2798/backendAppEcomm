import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:["true","Please provide a collection name"],
            trim:true,
            maxLength:[
                120,
                "Collection name should not mare than 120 letters"
            ]
        }
    },
    {timestamps:true}
);

export default mongoose.model("collection", collectionSchema)

//here the collection is going to be stored in database in lowercase and in plural like collections