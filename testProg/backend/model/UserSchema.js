import { Schema,model } from "mongoose";


const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    posts:[
        {
            type:Schema.ObjectId,
            ref:'Post'
        }
    ],
    
    AvatarUrl:String
    
},{timestamps:true}
)

export default model('User',UserSchema)

