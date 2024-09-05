import { useContext } from 'react';
import '../CSS/MyProf.css'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Context } from '..';

const MyProf = () => {
    const {store} = useContext(Context)
    return (
        <>
            <div className="PostsDiv" >
                <div className="MyProfForm" >
                    <img className='avaMyProf' src="https://flomaster.top/uploads/posts/2023-01/thumbs/1673563902_flomaster-club-p-profil-risunok-vkontakte-11.jpg" alt="ava" />
                    <div  className='MyProfInfo'>
                        <button className='MyProfButt'>Редактировать</button>
                        <h3>{store.userData.username}</h3>
                        
                        <p><IoIosInformationCircleOutline className='infoIcon' />подробнее</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}


export default MyProf