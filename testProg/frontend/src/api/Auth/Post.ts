import { AxiosResponse } from 'axios'
import rout from '../ApiRout'
import ItemPosts from '../../Interface/ItemPosts'




export const GetPosts = ():Promise<AxiosResponse<ItemPosts[]>> =>{
    return rout.get('post')
}

export const GetMyPosts = ():Promise<AxiosResponse<ItemPosts[]>> => {
    return rout.get('post/myPosts')
}

