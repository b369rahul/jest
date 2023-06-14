/**
 * jest.mock
 * This is again extension of jest.mock with custom implementation but this should be used when you
 * not only want to enforce mocked function to behave in some way but also want to check with what arguments
 * that function is called or how many times that function is called.
 */
import { getSystemTimezone } from "../../utils/getSystemTimezone";

jest.mock("../../utils/getSystemTimezone", () => ({
  getSystemTimezone: jest.fn(() => "America/New_York"),
}));

describe("jest.mock", () => {
  test("Mock with custom implementation and spy", () => {
    console.log(getSystemTimezone());
    // 🤔 This will work here because custom implementation we provided is not jest function, jest can
    // track it. Earlier we provided direct implementation which jest can't track on its own.
    expect(getSystemTimezone).toHaveBeenCalledTimes(1);
  });
});
