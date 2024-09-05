import { Schema,model } from "mongoose";


export const PostsSchema = new Schema({
    head: {
        type:String,
        required:true,
    },
    text: {
        type:String,
        required:true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    img:String

},
{
    timestamps:true
})


export default model('Post',PostsSchema)