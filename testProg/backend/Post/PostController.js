import { validationResult } from "express-validator"
import PostsSchema from "../model/PostsSchema.js"
import UserSchema from "../model/UserSchema.js"

class PostController {
    async create(req,res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }

        try {

            const {head,text,img} = req.body
            const data = {
                head:head,
                text:text,
                user:req.UserId,
                img:img
            }
            const newPost = PostsSchema(data)
            await newPost.save()
            const user = await UserSchema.findById(req.UserId)
            user.posts.push(newPost._id)
            user.save()
            res.json({message:'вы создали статю'})
        }
        catch (e) {
            res.status(400).json({error:"error"})
        }
    }

    async getPosts(req,res) {
        try {
            const posts = await PostsSchema.find().populate('user').exec()
            res.json(posts)
        }
        catch (e){
            res.status(400).json({message:"error"})
        }
    }

    async getOnePost(req,res) {
        try{
            const post = await PostsSchema.findOne({_id:req.params.id}).populate('user').exec()
            if (post === null) {
                return res.status(400).json({message:"не удолось найти статю"})
            }
            res.json(post)
        }
        catch(e) {
            return res.status(400).json({message:"не удолось найти статю"})
        }
    }

    async remove(req,res) {
        try {

            const postId = req.params.id
            const post = await PostsSchema.findOne({_id:postId})
            
            if (!post) {
                return res.status(400).json({message:"не удолось найти статю"})
            }
            await post.deleteOne()
            return res.json({message:"вы удалили статю!"})
        }
        catch (e){
            return res.status(500).json({message:"не удолось удалить статю"})
        }
        


    }

    async update(req,res) {
        try {
            const valid = validationResult()
            if (!valid.isEmpty()){
                return res.status(400).json({message:valid.array()})
            }
            const postId = req.params.id
            const post = await PostsSchema.findOne({_id:postId})
            if (post === null) {
                return res.status(500).json({message:"не удолось найти статю"})
            }
            await post.updateOne({
                head:req.body.head,
                text:req.body.text,
                user:req.UserId,
                img:req.body.img
            }) 
            res.json({message:"вы изминили статю"})
        }
        catch (e) {
            res.status(400).json({message:"не удолось найти статю"})
            console.log(e)
        }
    }

    async getUserPosts(req,res) {
        try {
            const user = await UserSchema.findOne({_id:req.UserId})
            let myPosts = []
            for (let i = 0; i < user.posts.length;i++){
                const posts = await PostsSchema.findOne({_id:user.posts[i]})
                myPosts.push(posts)            
            }
            res.json(myPosts)
        }
        catch (e){
            res.status(400).json(e)
        }


    }
   

}

export default new PostController()