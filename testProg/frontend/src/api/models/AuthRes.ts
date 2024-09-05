import userData from "../../Interface/UserData"

interface AuthRes {
    token:string
    user: userData
}

export default AuthRes