/**
 * jest.fn()
 * While writing unit tests for a component or utility. We see that function might take other function as an argument
 * Now as we writing test, we don't have access to the original function that this component or utility will be called
 * with. But we want to check whether this function is being called with correct arguments, correct number of times, etc.
 * and this is where jest.fn will come to rescue. This provides you with a mock function to which you can even provide
 * custom implementation too. This function is now completely yours pass it wherever you want.
 */

import { render, screen, waitFor } from "@testing-library/react";
import { Counter } from "../../components/Counter";
import userEvent from "@testing-library/user-event";

const onCounterUpdate = jest.fn(() => {
  console.log("This function is called");
});

describe("jest.fn", () => {
  test("how jest.fn works", async () => {
    render(<Counter onCounterUpdate={onCounterUpdate} />);
    userEvent.click(screen.getByTestId("counter-button"));
    await waitFor(() => expect(onCounterUpdate).toHaveBeenCalledTimes(1));
    expect(onCounterUpdate).toHaveBeenCalledTimes(1);
  });
});
