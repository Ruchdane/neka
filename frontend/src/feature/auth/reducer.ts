import { Profil } from "../profile";

export type UserState = {
    username: string;
    profile: Profil;
};

export type AuthState = {
  user: UserState | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
};

export const defaultAuthState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

export type Action = { type: "LOGIN_START"; } |
{ type: "LOGIN_SUCCESS"; user: UserState; } |
{ type: "LOGIN_FAILURE"; error: string; } |
{ type: "LOGOUT"; };

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      };
  }
};