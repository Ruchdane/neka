"use client";
import { useNavigate } from "react-router-dom";
import { Dispatch, useContext, } from "react";
import { Action, UserState } from "../reducer";
import { AuthContext } from "../context";
import { Profil } from "../../profile";

export function useUserContext(): [UserState, Dispatch<Action>] {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Use User Context Outside Of its Provider");
  }
  const { state, dispatch } = authContext;
  if (state.user)
    return [state.user, dispatch];
  navigate("/login")
  // Maybe this can cause some bugs ?
  return [{
    username: 'Error',
    profile: Profil.Student
  }, dispatch]
}
