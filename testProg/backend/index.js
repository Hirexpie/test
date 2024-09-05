import express from 'express'
import AuthRouter from './Auth/AuthRouter.js'
import PostRouter from './Post/PostRouter.js'
import mongo from 'mongoose'
import cors from 'cors'

const PORT = 4000
const app = express()


app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json())
app.use('/auth', cors(),AuthRouter)
app.use('/post',cors(),PostRouter)

const main = async ()  => {
    try {
        await mongo.connect('mongodb+srv://bdrik61:ggftftghgh@cluster0.opn0v.mongodb.net/')
        app.listen(PORT,() => {
            console.log('server ok')
            
            
        })
    }
    catch (e) {
        console.log('server error')
    }
}


main()