import { Router } from "express";
import CheckAuth from "../CheckAuth.js";
import PostController from "./PostController.js";
import { postCreateValidator } from "../Validators/PostValidator.js";

const rout = new Router()



rout.get('', PostController.getPosts)

rout.post('',postCreateValidator, CheckAuth ,PostController.create)

rout.get('/myPosts', CheckAuth, PostController.getUserPosts)

rout.get('/:id', PostController.getOnePost)

rout.delete('/:id',CheckAuth,PostController.remove)

rout.patch('/:id',postCreateValidator,CheckAuth,PostController.update)

export default rout