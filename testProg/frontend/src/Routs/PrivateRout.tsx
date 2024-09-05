import { useContext } from "react"
import { Outlet,Navigate} from "react-router"
import { Context } from ".."

const PrivateRout = () => {
    const {store} = useContext(Context)
    return (
        store.isAuth && window.localStorage.getItem('token') ? <Outlet /> : <Navigate to='/Login' />
    )
} 

export default PrivateRout