/**
 * restoreAllMocks
 * It is very common when we write unit test to mock out some functions or modules to control its behavior while
 * testing. While writing unit test we want to enforce some behavior on such functions/modules based on the scenario
 * we are testing in the given test. This not only helps to isolate the code we actually want to test without relying on
 * how some external dependencies behave.
 *
 * But sometimes, after running specific test case we may want to restore the mocked functions back to their
 * original state. This is may be to ensure that next test gets fresh state of the external dependencies and that
 * test can again mock out or spy as per the requirement or even not choose to spy to test particular use case.
 * And this is where `restoreAllMocks` comes into play.
 *
 * By calling restoreAllMocks, we are asking jest to remove all mockImplementations that we have applied and "restore"
 * the original behavior. This means that any further calls will execute original implementations rather than mocked one.
 * In short it ensures "clean test environment"
 *
 * Caveat: Most important caveat here is that `restoreAllMocks` will only restore mocked state created using `jest.spyOn`.
 * If mock is created using jest.fn(), it will restore the default behavior of jest.fn().
 * And if direct implementation of function is provided, restoreAllMocks will do nothing.
 *
 * 💪🏽 After reading this explanation, try to guess what following test will print with and without `restoreAllMocks` line
 * and does commenting out any version of jest.mock makes any difference
 */

import { Counter } from "../components/Counter";
import * as useCounter from "../hooks/useCounter";
import { render } from "@testing-library/react";

jest.mock("../utils/getSystemTimezone", () => ({
  getSystemTimezone: () => "America/New_York",
}));

// 🦄 Comment out above version and try following implementation
// jest.mock("../utils/getSystemTimezone", () => ({
//   getSystemTimezone: jest.fn(() => "America/New_York"),
// }));

jest.spyOn(useCounter, "useCounter").mockImplementation(() => [6, jest.fn()]);

describe("restoreAllMocks", () => {
  // 🦄 Try commenting following line
  afterEach(() => jest.restoreAllMocks());

  test("restoreAllMocks first test", () => {
    render(<Counter />);
  });

  test("restoreAllMocks second test", () => {
    render(<Counter />);
  });
});
