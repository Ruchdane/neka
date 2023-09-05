import { Profil } from "../feature/profile";
import { fetchWraper } from "../utils";
import { AccountResponse } from "./auth";

export async function register(username:string,profile: Profil,password: string): Promise<AccountResponse> {
    return await fetchWraper("POST","/api/register",JSON.stringify({username,password,profile}));
}