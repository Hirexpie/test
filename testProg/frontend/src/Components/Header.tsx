import { Link } from "react-router-dom"
import '../CSS/Header.css'
import { Context } from "../index"
import { useContext } from "react"
import { observer } from "mobx-react-lite"



const IsLog = (isLogin:Boolean) => {
    const {store} = useContext(Context)
    if (isLogin){
        return (
            <div className="avoLog" >
                <Link className="avoLogLink" to='myPage' ><h4>{store.userData.username}</h4><img className="ava" src='https://flomaster.top/uploads/posts/2023-01/thumbs/1673563902_flomaster-club-p-profil-risunok-vkontakte-11.jpg' alt="avatar"></img></Link>
                
            </div>
        )
    }
    else{
        return <Link className="buttonExit" to="/Login" ><p>Войти</p></Link>
    }

}


const Header = () => {
    const {store} = useContext(Context)
    

    return (
        <header>

            <Link className="LogoHeader" to='/'><h2>Логатип</h2></Link>
            
            {IsLog(store.isAuth)}

        </header>
    )
}

export default observer(Header) 