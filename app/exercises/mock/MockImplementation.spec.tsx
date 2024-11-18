/**
 * jest.mock
 * this is extension of mock with explanation of how to provide our custom implementation.
 * This should be used in places where we don't just want to mock out some function but want to
 * behave it in particular way so that we can test out our scenario properly
 */
import { getSystemTimezone } from "../../utils/getSystemTimezone";
import getUser from "../../utils/defaultExport";

jest.mock("../../utils/getSystemTimezone", () => ({
  getSystemTimezone: jest.fn(() => "America/New_York"),
}));

jest.mock("../../utils/defaultExport", () => ({
  // 🦄 Try removing following line, any guesses why this will not work after removing this?
  __esModule: true,
  default: jest.fn(() => ({
    user: "mock@mock.com",
    country: "Mock",
    username: "Mock",
  })),
}));
// 🦄 comment  above mock and use following mock
// jest.mock("../../utils/defaultExport", () => () => ({
//   user: "mock@mock.com",
//   country: "Mock",
//   username: "Mock",
// }));

describe("jest.mock", () => {
  test("Mock with custom implementation", () => {
    console.log(getSystemTimezone());
    // 🤔 Uncomment following line and check. Wait what? We called this function right? Then why not able to check. Read on to the next part
    // to understand this.
    expect(getSystemTimezone).toHaveBeenCalledTimes(1);
  });

  test("Simple mock", () => {
    console.log(getUser());
    expect(getUser).toHaveBeenCalledTimes(1);
  });
});
