"use client";
import { AuthState, defaultAuthState, authReducer } from "../reducer";


export function usePersistedAuthState(): AuthState {
  const user = localStorage?.getItem("user");
  return user
    ? authReducer(defaultAuthState, { type: "LOGIN_SUCCESS", user: JSON.parse(user) })
    : defaultAuthState;
}
