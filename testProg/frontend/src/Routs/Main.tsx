import { useContext, useEffect } from 'react'
import '../CSS/Main.css'
import ItemPosts from '../Interface/ItemPosts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'


const GetPosts = (el : ItemPosts) => {
    return (
        <div className="post">
            
            <h2>{el.head}</h2>
            <p>{el.text}</p>
            
            
        </div>
    )
}

const Main = () => {
    const {store} = useContext(Context)
    useEffect(() => {
        store.Posts()
    })
    return (
        <>
            <main className="posts" >
                

                {store.posts.map(el => (
                    <div className='PostsDiv' key={el._id}>{GetPosts(el)}</div>
                ))}
            </main>
        
        </>
    )


}
export default observer(Main)