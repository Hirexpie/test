import { useState } from 'react'
import RegisterData from '../Interface/RegisterData'
import '../CSS/Register.css'
import { RegApi } from '../api/Auth/Auth'


const Register = () => {
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [IsPass,setIsPass] = useState(false)
    const data : RegisterData = {
        email:email,
        username:username,
        password:password
    }
    const click = async (data:RegisterData, pass:string) =>{
        if (data.password !== pass) {
            setIsPass(true)
            return
        }
        try {
            const res = await RegApi(data)
            console.log(res.data)
            
        }
        catch (e) {
            console.log(e)
        }
        setIsPass(false)
    }
    




    return ( 
        <>  
            <div className='LoginMain' >

                <div className="registerForm" >
                    <h1>Регистрацыя</h1>
                    <div className="inputDivReg">

                    <div className='inputDivReg'><input value={email} onChange={e => setEmail(e.target.value)} type="Email" placeholder='Email'/></div> 
                    <div className='inputDivReg'><input value={username} onChange={e => setUsername(e.target.value)} type="name" placeholder='login'/></div>
                    <div className='inputDivReg'><input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/></div>
                    <div className='inputDivReg'><input value={password2} onChange={e => setPassword2(e.target.value)} type="password" placeholder='password'/></div>
                    </div>
                    {IsPass && <h3>парольи не совпадают</h3>}
                    <button  onClick={e => click(data,password2)} >Регистрацыя</button>




                </div>
            </div>
        </>
    )



} 

export default Register