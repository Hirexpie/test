import LoginData from '../../Interface/LoginData'
import rout from '../ApiRout'
import { AxiosResponse } from 'axios'
import AuthRes from '../models/AuthRes'
import RegisterData from '../../Interface/RegisterData'




export const LoginApi = async (date: LoginData):Promise<AxiosResponse<AuthRes>> => {
    return await rout.post<AuthRes>('/auth/Login',date)
}

export const RegApi = async (data: RegisterData) => {
    const message = await rout.post('/auth/register',data)
    return message
}
