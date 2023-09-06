import { Profil, profilToString } from "../feature/profile";
import { RegisterForm } from "../feature/register/register";

type RegisterPageProps = {
    profile: Profil;
};

export function RegisterPage({profile}: RegisterPageProps){
    return <main className="center">
        <h1> Enregistrer un compte {profilToString(profile)}</h1>
        <RegisterForm profile={profile}/>
    </main>
}