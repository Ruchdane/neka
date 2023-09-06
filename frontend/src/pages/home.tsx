import { useUserContext } from "../feature/auth/hooks";
import { logout } from "../feature/auth/thunk/localstorage";
import { profilToString } from "../feature/profile"

export function HomePage() {
  const [user,dispatch] = useUserContext();
  return (
      <main className="center"> 
        <h1> Bienvenue </h1>
        <h2> {user.username} : {profilToString(user.profile)} </h2>
        <button onClick={() => logout(dispatch)}> Se déconecter </button>
      </main>
  )
}

export default HomePage
