import ItemPosts from "./ItemPosts"

interface userData {
    username:userDataType,
    _id:userDataType,
    email:userDataType,
    posts:ItemPosts[]
}

type userDataType = string | null
export default userData