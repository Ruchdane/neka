"use client";
import { Dispatch, useContext } from "react";
import { AuthContext } from "../context";
import { Action, AuthState } from "../reducer";

export function useAuthContext(): [AuthState, Dispatch<Action>] {
  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error("Use Auth Provider Outside Provider")
  }
  return [userContext.state, userContext.dispatch];
}
