import { body } from 'express-validator'

export const postCreateValidator = [
    body('head').isLength({min:1}),
    body('text').isLength({min:10}),
]