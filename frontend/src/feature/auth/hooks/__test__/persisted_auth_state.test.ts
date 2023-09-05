import { renderHook } from "@testing-library/react";

import { usePersistedAuthState } from "@/feature/auth/hook";;
import { defaultAuthState, authReducer } from "@/feature/auth/reducer";;
import { RoleSchema } from "@/dto/role.dto";
// TODO: Add edge case
//   - No localstorage
//   - Json parse error

describe("[hook] usePersistedAuthState", () => {
  test("should return default state when user is not in local storage", () => {
    const { result } = renderHook(() => usePersistedAuthState());
    expect(result.current).toEqual(defaultAuthState);
  });

  test("should return user from local storage when present", () => {
    // Replace with a parameterised test
    const mockUser = {
      id: 1,
      role: RoleSchema.enum.Shop,
      name: "Test User",
    };
    const localStorageMock = {
      getItem: jest.fn(() => JSON.stringify(mockUser)),
    };
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    const { result } = renderHook(() => usePersistedAuthState());
    // Simulate a sucessfull login
    const expected = authReducer(defaultAuthState, { type: "LOGIN_SUCCESS", user: mockUser })

    expect(result.current).toEqual(expected);
  });
});

