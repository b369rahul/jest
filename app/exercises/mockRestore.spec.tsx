/**
 * mockRestore
 * 🚨🚨🚨 Read the details of restoreAllMocks completely. In short, restoreAllMocks loop over all the mocked functions
 * and calls `mockRestore` on it. Serves the same purpose just for single function.
 *
 * Use this when you want to start fresh with only one function and maybe retain the behavior of other functions.
 * In case you are using this for mock function created with jest.fn, this will clear all information stored in
 * the mockFn.mock.calls, mockFn.mock.instances, mockFn.mock.contexts and mockFn.mock.results and it will behave like freshly
 * created jest.fn().
 * In short, use this when you want to restore the original implementation of the function.
 *
 * 💪🏽 After reading this explanation, try to guess what each of the test will print and does commenting out any version
 * of the jest.mock makes any difference to its output
 */

import { Counter } from "../components/Counter";
import * as useCounter from "../hooks/useCounter";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../utils/getSystemTimezone", () => ({
  getSystemTimezone: () => "America/New_York",
}));

// 🦄 Comment out above version and try following implementation
jest.mock("../utils/getSystemTimezone", () => ({
  getSystemTimezone: jest.fn(() => "America/New_York"),
}));

const useCounterSpy = jest
  .spyOn(useCounter, "useCounter")
  .mockImplementation(() => [6, jest.fn()]);

describe("mockRestore", () => {
  test("mockRestore first test", () => {
    render(<Counter />);
    // 🦄 Try commenting following line
    useCounterSpy.mockRestore();
  });

  test("mockRestore second test", () => {
    render(<Counter />);
  });

  test("mockRestore third test", () => {
    const onCounterUpdate = jest.fn(() => console.log("Counter Updated"));
    render(<Counter onCounterUpdate={onCounterUpdate} />);

    fireEvent.click(screen.getByTestId("counter-button"));
    expect(onCounterUpdate).toHaveBeenCalledTimes(1);

    // 🦄 Try commenting following line and check the log `Counter Updated`
    onCounterUpdate.mockRestore();

    fireEvent.click(screen.getByTestId("counter-button"));
    expect(onCounterUpdate).toHaveBeenCalledTimes(1);
  });
});
