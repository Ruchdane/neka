import { Profil } from "../feature/profile/index";
import { controllerFetch } from "./net";
export type  AccountResponse = {
    username: string,
    profile: Profil
}
export async function authenticate(Username: string,Password: string) : Promise<AccountResponse> {
    return await controllerFetch("POST","/api/auth",JSON.stringify({Username,Password}));
}