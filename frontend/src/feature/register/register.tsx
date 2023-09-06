import { FormEvent, useMemo, useState } from "react";
import type { Profil } from "../profile"
import { registerThunk } from "./thunk";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../auth/hooks";

type RegisterProp =  {
    profile: Profil
}

export function RegisterForm({profile} : RegisterProp){


    const [error,SetError] = useState("");
    
    const [authState,dispatch] = useAuthContext()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const isDisabled = useMemo(() => username === "" || password !== confirmPassword || password === "",[
        username,password,confirmPassword
    ]);

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        registerThunk(username,password,profile,SetError,dispatch);
    }

    return authState.isAuthenticated ? <Navigate to='/'/>
    : <form className="card" onSubmit={handleSubmit}>
        { error ? error : null}
        <div className="form-item">
            <label> Nom d'utilisateur </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-item">
            <label> Mot de passe </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-item">
            <label> Confirmez mot de passe </label>
            <input type="auth-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div className="form-item">
            <button type="submit" disabled={isDisabled}>
                S'enregistrer
            </button>
        </div>
    </form>
}