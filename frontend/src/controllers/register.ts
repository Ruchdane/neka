import { Profil } from "../feature/profile/index";
import { AccountResponse } from "./auth";
import { controllerFetch } from "./net";

export async function register(username:string,profile: Profil,password: string): Promise<AccountResponse> {
    await controllerFetch("POST","/api/register",JSON.stringify({username,password,profile}));
    return {username,profile}
}