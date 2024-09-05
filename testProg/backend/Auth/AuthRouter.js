import { Router } from "express";
import AuthController from './AuthController.js'
import {register} from "../Validators/AuthValidator.js";

const rout = new Router() 

rout.post('/Login', AuthController.Login)

rout.post('/register', register ,AuthController.register)

export default rout