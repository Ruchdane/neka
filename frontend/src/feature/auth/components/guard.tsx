import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks"

type AuthGurdProps = {
    children: ReactNode
}
export function AuthGurd({children} : AuthGurdProps){
    const authContext = useAuthContext()
    const [ state ] = authContext;
    return  state.user ?
    <> {children} </>
    :<Navigate to="/login" />
}