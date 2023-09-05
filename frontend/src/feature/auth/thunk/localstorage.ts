"use client";
import type { Dispatch } from "react";
import { Action, UserState } from "../reducer";

export function loginSuccess(user: UserState, dispatch: Dispatch<Action>) {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({ type: "LOGIN_SUCCESS", user });
};

export function logout(dispatch: Dispatch<Action>) {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};
