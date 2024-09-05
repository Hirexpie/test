interface ItemPosts {
    _id:number;
    head:ItemPostsType;
    text:ItemPostsType;
    img:ItemPostsType
}


type ItemPostsType = string | null

export default ItemPosts