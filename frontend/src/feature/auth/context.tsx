import { createContext, useReducer } from "react";
import { AuthState, Action, authReducer } from "./reducer";
import { usePersistedAuthState } from "./hooks";

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// UserContextProvider component to wrap your app
type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, usePersistedAuthState());
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

