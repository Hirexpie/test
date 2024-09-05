import { useContext, useState } from 'react'
import '../CSS/Login.css'
import { Link } from 'react-router-dom'
import LoginData from '../Interface/LoginData'
import { Context } from '../index'
import {observer} from 'mobx-react-lite'


const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {store} = useContext(Context) 
    const data : LoginData = {
        username:username,
        password:password
    }
    
    return (
        <>
            <main className='LoginMain' >
                <div className="LoginBox">
                    <h1>Авторизацыя</h1>
                    <div className='inputDiv' >
                        <div><input value={username} onChange={e => setUsername(e.target.value)} type='login' placeholder='Login' ></input></div>
                        <div><input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' ></input></div>
                    </div>
                    <div className='buttonDiv' >
                        <Link to='/register' className='ZabPassLink' >нет аккаунта?</Link>
                        <button onClick={() => store.Login(data) }  >войти</button>
                    </div>
                </div>
            </main>
        
        </>
    )
}

export default observer(Login)