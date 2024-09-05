import ItemPosts from '../Interface/ItemPosts'
import CreatePost from '../Components/createPost'
import MyProf from '../Components/MyProf'
import { useContext, useEffect } from 'react'
import { Context } from '..'



const GetPosts = (el : ItemPosts) => {
    
    
    return (
        <div className="post">
            <h2>{el.head}</h2>
            <p>{el.text}</p>
        </div>
    )
}

const MyPage = () => {
    const {store} = useContext(Context)
    useEffect(() => {
        store.MyPosts()
    })
    return (
        <>
            <main className="posts" >
                <MyProf/>
                <CreatePost/>
                {store.myPosts.map(el => (
                    <div className='PostsDiv' key={el._id}>{GetPosts(el)}</div>
                ))}
            </main>
        
        </>
    )


}
export default MyPage