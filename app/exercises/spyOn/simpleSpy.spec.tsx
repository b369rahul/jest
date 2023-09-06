/**
 * jest.spyOn
 * This is again kind of mocking only. We are telling jest that we want to spy over some function of that module.
 * This by default does nothing just spies over the function we asked it to. So unlike jest.mock it will not
 * override the default implementation by just saying jest.spyOn. How to override the custom implementation we will
 * see in next chapter. Call to jest.spyOn returns the mock function on which we can perform different operations
 *
 * 🚨🚨🚨 Important thing since jest.spyOn is simple mock you can restore original implementation of function by
 * restore functions on mock that we will be covering in great detail in next module.
 */
import * as utils from "../../utils/getSystemTimezone";

// Here we are just spying over the getSystemTimezone function from entire file, and unlike jest.mock this will
// not return undefined. Try this out
const getSystemTimezoneSpy = jest.spyOn(utils, "getSystemTimezone");

describe("jest.spyOn", () => {
  test("Mock with custom implementation and spy", () => {
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
  });
});
