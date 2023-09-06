import { Profil } from "../feature/profile"
import { fetchWraper } from "../utils"

export type  AccountResponse = {
    username: string,
    profile: Profil
}
export async function authenticate(username: string,password: string) : Promise<AccountResponse> {
    return await fetchWraper("GET","/api/auth",JSON.stringify({username,password}));
}