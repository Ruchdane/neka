import { ReactNode } from "react";
import { renderHook } from "@testing-library/react";

import { useAuthContext } from "@/feature/auth/hook";
import { AuthContext } from "@/feature/auth/context";
import { UseAuthProviderOutsideProvider } from "@/feature/auth/error";
import { assert, describe, expect, test } from "vitest";


describe("[Hook] useAuthContext", () => {
  test("Shoudl pass",() => {
    expect(3).toBe(3)
  })
  test('useAuthContext throws an error when used outside AuthContextProvider', () => {
    // Suppress expected console error warning in this test
    const originalError = console.error;
    const errorMock: jest.MockedFn<typeof console.error> = jest.fn();
    console.error = errorMock;
    try {
      // Render the component that uses the hook without the AuthContextProvider
      renderHook(() => useAuthContext());
    }
    catch (error) {
      expect(error).toEqual(UseAuthProviderOutsideProvider)
    }
    finally {
      // Restore console.error to its original behavior
      console.error = originalError;
      // Expected console error to have been called 1 time
      expect(errorMock).toBeCalled();
    }
  });



  test('useAuthContext returns AuthState and Dispatch function', () => {
    // Mock the AuthContextProvider for testing
    function AuthContextProvider({ children, value }: { children: ReactNode, value: any }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    const mockState = { authenticated: true, user: { id: 1, name: 'TestUser' } };
    const mockDispatch = jest.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: mockState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useAuthContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const [authState, authDispatch] = result.current;

    expect(authState).toEqual(mockState);
    expect(authDispatch).toEqual(mockDispatch);
  });
})
