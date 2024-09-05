import { makeAutoObservable } from "mobx";
import LoginData from "../Interface/LoginData";
import { LoginApi } from "./Auth/Auth";
import userData from "../Interface/UserData";
import { GetMyPosts, GetPosts } from "./Auth/Post";
import ItemPosts from "../Interface/ItemPosts";

export default class Store {
    userData:userData = {
        username:null,
        email:null,
        _id:null,
        posts:[]
    }
    isAuth = false
    posts: ItemPosts[] = []
    myPosts: ItemPosts[] = []

    





    constructor() {
        makeAutoObservable(this)
    }
    setAuth(Auth:boolean) {
        this.isAuth = Auth
    }
    setUser(user:userData) {
        this.userData = user
    }
    async Login(date:LoginData) {
        try {
            const res = await LoginApi(date)
            localStorage.setItem('token', res.data.token)
            this.setAuth(true)
            this.setUser(res.data.user)
        }
        catch (e) {
        }
    }
    setPosts(data:ItemPosts[]) {
        this.posts = data
    }
    async Posts() {
        try {
            const res = await GetPosts()
            this.setPosts(res.data)
        }
        catch (e) {
            console.log('error')
        }
        return
    }
    setMyPosts(data:ItemPosts[]) {
        this.myPosts = data
    }
    async MyPosts() {
        try {
            const res = await GetMyPosts()
            this.setMyPosts(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
}