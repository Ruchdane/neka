import type { Dispatch } from "react";
import { Action } from "../reducer";
import { authenticate } from "../../../controllers/auth";
import { loginSuccess } from "./localstorage";

export async function loginThunk(username: string, password: string, dispatch: Dispatch<Action>) {
  dispatch({ type: "LOGIN_START" });
  try {
    const account = await authenticate(username,password); 
    loginSuccess(account,dispatch)
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", error: (error as string)  }); 
  }
}