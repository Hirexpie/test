import UserSchema from "../model/UserSchema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from "express-validator"

const getJwt = (id) =>{
    return jwt.sign({
        _id:id,
    },
    "ggftftghgh",
    {
        expiresIn:"1m"
    }
)

} 

class AuthController {
    async register(req,res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({error:errors.array()})
        }
        try{

            const {email,username,password} = req.body
            const emailReal = await UserSchema.findOne({email})
            if (emailReal) {
                return res.status(400).json({message:'этот email уже сушествует'})
            }
            const UsernameReal = await UserSchema.findOne({username})
            if (UsernameReal) {
                return res.status(400).json({message:'этот логин уже сушествует'})
            }
            const passwordHash = bcrypt.hashSync(password,8)
            const data = {
                email:email,
                username:username,
                password:passwordHash
            }
            const newUser = UserSchema(data)
            await newUser.save()
            res.json('вы успешно аторизввались')
        }
        catch (e){
            res.status(400)
            console.log(e)
        }
      
      
    }
    async Login(req,res) {
        try {
            const {username,password} = req.body
            const cond = await UserSchema.findOne({username:username}) 
            if (!cond) {
                return res.status(400).json({message:"пароль или логин не верен"})
            }
            const isPassTrue = bcrypt.compareSync(password,cond.password)
            if (!isPassTrue) {
                return res.status(400).json({message:"пароль или логин не верен"})
            }
            const token = getJwt(cond._id)
            res.json({token:token,user:cond})
            
        }
        catch (e) {
            res.status(400).json({message:"Login error"})
        }
    }


}

export default new AuthController()