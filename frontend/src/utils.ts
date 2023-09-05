export async function fetchWraper<T>(method: string,url: string,body: any): Promise<T>{
    try {
        const res = await fetch(url,{
            method,
            body
        })
        try {
            const data = res.json();
            return data as T;
        } catch (error) {
            throw "Erreur lors du traitement de la reponse"
        }
    } catch (error) {
        throw "Error lors de la requete vers le serveur"
    }
}