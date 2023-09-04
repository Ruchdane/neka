import { ReactNode } from "react"

type AuthGurdProps = {
    children: ReactNode
}
export function AuthGurd({children} : AuthGurdProps){
    // Redirect if not loged in
    return <> {children} </>
}