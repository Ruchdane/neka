import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NotFound } from "./404";

export default function ErrorPage() {
  const error : unknown = useRouteError();
  console.error(error);
  if(isRouteErrorResponse(error)){
    return error.status === 404 
        ? <NotFound/> 
        : (
            <div>
            <h1>Oops!</h1>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
            {error.data?.message && <p>{error.data.message}</p>}
            </div>
        );
    }
    else {
        return <h1>Unknown error occured</h1>
    }
}