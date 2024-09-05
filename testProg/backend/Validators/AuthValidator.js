import { body } from "express-validator"

export const register = [
    body('email','email указон не верно').isEmail(),
    body('username','имя указон не верно').isLength({min:3}),
    body('password','пароль должен состаять из 8 символов ').isLength({min:8}),
    body('AvatarUrl').optional().isURL()
]


