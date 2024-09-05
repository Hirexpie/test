import jwt from 'jsonwebtoken'


export default (req,res,next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'')
    if (token){

        try {
            const decoded = jwt.decode(token)
            req.UserId = decoded._id
            next()
        }
        catch (e) {
            res.status(400)
            console.log(e)
        }
    }
}