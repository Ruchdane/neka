import { Dispatch } from "react";
import { register } from "../../controllers/register";
import { loginSuccess } from "../auth/thunk/localstorage";
import { Profil } from "../profile";
import { Action } from "../auth/reducer";

export async function registerThunk(username: string,password: string,profile: Profil,setError: (arg: string) => void,dispatch: Dispatch<Action>){
    try {
        const account = await register(username,profile,password)
        loginSuccess(account,dispatch);
    } catch (error) {
        setError((error as string))
    }
}