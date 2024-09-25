import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../useCounter";

test("should initialize with the default value", () => {
  const { result } = renderHook(() => useCounter());

  // Check initial value
  expect(result.current.count).toBe(0);
});

test("should increment the counter", () => {
  const { result } = renderHook(() => useCounter());

  // Call increment function
  act(() => {
    result.current.increment();
  });

  // Check updated count
  expect(result.current.count).toBe(1);
});
