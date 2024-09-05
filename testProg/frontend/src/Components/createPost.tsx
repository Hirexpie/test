import { useState } from "react";
import { TbPhoto } from "react-icons/tb";




const CreatePost = () => {
    const [isTextPostActive,setIsTextPostActive] = useState(false)
    const [inputHead,setInputHead] = useState('')
    const [inputText,setInputText] = useState('')
  
  
    const Click = () => {
        const data = {
            head:inputHead,
            text:inputText,
            img:''
        }
        console.log(data)
    }    
    return (
        <div className='PostsDiv' ><div className='createPost'>
            <div className='createPostHead' >
                <input className='inputHead' value={inputHead} onChange={e => setInputHead(e.target.value)} onClick={() => setIsTextPostActive(true)} placeholder='Новы пост' type="text" />
                <input id='fil' type="file"/><label htmlFor="fil"><TbPhoto className='CreatePostPhotoIcon' /></label>
            </div>                        
            {isTextPostActive &&<> <textarea value={inputText} onChange={e=> setInputText(e.target.value)} className='newPostText' ></textarea> <button onClick={Click} className='createButt' >создать</button> </>}                   
        </div></div>
    )
}

export default CreatePost