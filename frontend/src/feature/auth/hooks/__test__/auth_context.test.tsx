import { Dispatch, ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import { vi, describe, expect, test, MockedFunction } from "vitest";
import { useAuthContext } from "..";
import { AuthContext } from "../../context";
import { Action, AuthState, defaultAuthState } from "../../reducer";


describe("[Hook] useAuthContext", () => {
  test('useAuthContext throws an error when used outside AuthContextProvider', () => {
    // Suppress expected console error warning in this test
    const originalError = console.error;
    
    const errorMock: MockedFunction<typeof console.error> = vi.fn();
    console.error = errorMock;
    try {
      // Render the component that uses the hook without the AuthContextProvider
      renderHook(() => useAuthContext());
    }
    catch (error) {
      expect(error).toEqual(Error("Use Auth Provider Outside Of his Provider"))
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
    function AuthContextProvider({ children, value }: { children: ReactNode, value: {state: AuthState,dispatch: Dispatch<Action>} }) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }
    const mockState = defaultAuthState;
    const mockDispatch = vi.fn();

    const wrapper = ({ children }: { children: ReactNode }) =>
      <AuthContextProvider value={{ state: mockState, dispatch: mockDispatch }}>
        {children}
      </AuthContextProvider>
      ;
    const { result } = renderHook(() => useAuthContext(), { wrapper })
    // Access the returned state and dispatch from the hook
    const [authState, authDispatch] = result.current;

    expect(authState).toBe(mockState);
    expect(authDispatch).toBe(mockDispatch);
  });
})
