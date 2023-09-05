import { FormEvent, useState } from "react"
import { loginThunk } from "../thunk/net";
import { useAuthContext } from "../hooks";
import { Navigate } from "react-router-dom";

export function LoginForm(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [authState,dispatch] = useAuthContext()
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        loginThunk(username,password,dispatch);
    }

    return authState.isAuthenticated ? <Navigate to='/'/>
    : <form className="card" onSubmit={handleSubmit}>
    { authState.error ? authState.error : null}
        <div className="form-item">
            <label> Nom d'utilisateur </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-item">
            <label> Mot de passe </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-item">
            <button type="submit">
                {authState.isLoading ? "...En Cour" : "Se connecter"}
            </button>
        </div>
    </form>
}