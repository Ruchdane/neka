import { renderHook } from "@testing-library/react";
import { vi, describe, expect, test,  } from "vitest";

import { usePersistedAuthState } from "..";
import { defaultAuthState, authReducer } from "../../reducer";
import { Profil } from "../../../profile";


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
      profile: Profil.Student, 
      username: "Test User"
    };
    const localStorageMock = {
      getItem: vi.fn(() => JSON.stringify(mockUser)),
    };
    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    const { result } = renderHook(() => usePersistedAuthState());
    // Simulate a sucessfull login
    const expected = authReducer(defaultAuthState, { type: "LOGIN_SUCCESS", user: mockUser })

    expect(result.current).toEqual(expected);
  });
});