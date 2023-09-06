import { renderHook } from "@testing-library/react";
import { ReactNode,Dispatch } from "react";

import { AuthContext } from "../../context";
import { AuthState, authReducer, defaultAuthState,Action } from "../../reducer";
import { useUserContext } from "..";
import { vi, describe, expect, test, Mock, MockedFunction,  } from "vitest";
import { useNavigate } from "react-router-dom";
import { Profil } from "../../../profile";

// mock useNavigate
vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn()
}))

describe("[Hook] useUserContext", () => {

  test('useUserContext throws an error when used outside AuthContextProvider', () => {
    // setup a new mocking function for push method
    const navigateMock: MockedFunction<typeof useNavigate> = vi.fn();
    // mock a return value on useRouter
    (useNavigate as Mock).mockReturnValue(navigateMock)

    // Suppress expected console error warning in this test
    const originalError = console.error;
    const errorMock: MockedFunction<typeof console.error> = vi.fn();
    console.error = errorMock;
    try {
      // Render the component that uses the hook without the AuthContextProvider
      renderHook(() => useUserContext());
    }
    catch (error) {
      expect(error).toEqual(Error("Use User Context Outside Of its Provider"))
    }
    finally {
      // Restore console.error to its original behavior
      console.error = originalError;
      // Expected console error to have been called 1 time
      expect(errorMock).toBeCalled();
      expect(navigateMock).toBeCalledTimes(0);
    }
  });

  test('useUserContext returns user state and Dispatch function of logged in user', () => {
    // Mock the AuthContextProvider for testing
    function AuthContextProvider({ children, value }: { children: ReactNode, value: {state: AuthState,dispatch: Dispatch<Action>} }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    // Replace with a parameterised test
    const mockUser = {
      profile: Profil.Student,
      username: "Test User",
    };
    // Simulate a succesfull login
    const mockState = authReducer(defaultAuthState, { type: "LOGIN_SUCCESS", user: mockUser })
    const mockDispatch = vi.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: mockState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useUserContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const [user, dispatch] = result.current;

    expect(user).toBe(mockUser);
    expect(dispatch).toBe(mockDispatch);
  });

  test('useUserContext redirect to "/login" when not authenticated function', () => {
    vi.mock('next/router', () => ({
      useNavigate: vi.fn()
    }));
    // setup a new mocking function for push method
    const navigateMock: MockedFunction<typeof useNavigate> = vi.fn();
    // mock a return value on useNavigate
    (useNavigate as Mock).mockReturnValue(navigateMock);

    // Mock the AuthContextProvider for testing
    function AuthContextProvider({ children, value }: { children: ReactNode, value: {state: AuthState,dispatch: Dispatch<Action>} }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    const mockDispatch = vi.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: defaultAuthState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useUserContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const  dispatch = result.current[1];
    // Further decision need to be made
    // expect(user).toEqual(defaultAuthState.user)
    expect(navigateMock).toBeCalledWith("/login")
    expect(dispatch).toEqual(mockDispatch);
  });
})