export type ControllerResponse<T> = {
  success: false;
  errorMessage: string;
} | {
  success: true;
  data: T;
}
export async function controllerFetch<T>(method: string, url: string, body: any): Promise<T> {
  var res = null;
  var controllerResponse = null;
  try {
    res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json', // Set appropriate content type
      },
      method,
      body
    })
  } catch (error) {
    throw "Error lors de la requete vers le serveur"
  }
  if (!res.ok) {
    console.error(res.status)
    throw "Error lors de la requete vers le serveur"
  }

  try {
    controllerResponse = ((await res.json()).value) as ControllerResponse<T>;
  } catch (error) {
    throw "Erreur lors du traitement de la reponse"
  }
  if (controllerResponse.success)
    return controllerResponse.data
  else
    throw controllerResponse.errorMessage

}