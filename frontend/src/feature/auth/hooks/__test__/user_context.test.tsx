import { renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/feature/auth/context";
import { authReducer, defaultAuthState } from "@/feature/auth/reducer";
import { useUserContext } from "@/feature/auth/hook";
import { UseUserContextOutsideOfProvider } from "@/feature/auth/error";
import { RoleSchema } from "@/dto/role.dto";

// mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe("[Hook] useUserContext", () => {

  test('useUserContext throws an error when used outside AuthContextProvider', () => {
    // setup a new mocking function for push method
    const pushMock: jest.MockedFn<typeof useRouter> = jest.fn();
    // mock a return value on useRouter
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      // return mock for push method
      push: pushMock,
      // ... add the props or methods you need
    })

    // Suppress expected console error warning in this test
    const originalError = console.error;
    const errorMock: jest.MockedFn<typeof console.error> = jest.fn();
    console.error = errorMock;
    try {
      // Render the component that uses the hook without the AuthContextProvider
      renderHook(() => useUserContext());
    }
    catch (error) {
      expect(error).toEqual(UseUserContextOutsideOfProvider)
    }
    finally {
      // Restore console.error to its original behavior
      console.error = originalError;
      // Expected console error to have been called 1 time
      expect(errorMock).toBeCalled();
      expect(pushMock).toBeCalledTimes(0);
    }
  });

  test('useUserContext returns user state and Dispatch function of logged in user', () => {
    // Mock the AuthContextProvider for testing
    function AuthContextProvider({ children, value }: { children: ReactNode, value: any }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    // Replace with a parameterised test
    const mockUser = {
      id: 1,
      role: RoleSchema.enum.Shop,
      name: "Test User",
    };
    // Simulate a succesfull login
    const mockState = authReducer(defaultAuthState, { type: "LOGIN_SUCCESS", user: mockUser })
    const mockDispatch = jest.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: mockState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useUserContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const [user, dispatch] = result.current;

    expect(user).toEqual(mockUser);
    expect(dispatch).toEqual(mockDispatch);
  });

  test('useUserContext redirect to "/" when not authenticated function', () => {
    jest.mock('next/router', () => ({
      useRouter: jest.fn()
    }));
    // setup a new mocking function for push method
    const pushMock: jest.MockedFn<typeof useRouter> = jest.fn();
    // mock a return value on useRouter
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      // return mock for push method
      push: pushMock,
      // ... add the props or methods you need
    })

    // Mock the AuthContextProvider for testing
    function AuthContextProvider({ children, value }: { children: ReactNode, value: any }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    const mockDispatch = jest.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: defaultAuthState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useUserContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const [_user, dispatch] = result.current;
    // Further decision need to be made
    // expect(user).toEqual(defaultAuthState.user)
    expect(pushMock).toBeCalledWith("/")
    expect(dispatch).toEqual(mockDispatch);
  });
})