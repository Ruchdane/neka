export enum Profil {
    Student,
    Teacher,
    Admin
}

export function profilToString(profil: Profil): string {
    switch (profil) {
        case Profil.Student:
            return "étudiant"
            break;
        case Profil.Teacher:
            return "Enseignant"
            break; 
        case Profil.Admin:
            return "Administrateur"
            break;
        default:
            throw new Error("Profile Inconue")
            break;
    }
}