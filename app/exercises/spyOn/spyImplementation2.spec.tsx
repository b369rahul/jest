/**
 * jest.spyOn
 * This is again extension of spyOn chapter. This explains how you can provide different mock implementation
 * for the same spied on function in different test
 */
import * as utils from "../../utils/getSystemTimezone";

const getSystemTimezoneSpy = jest.spyOn(utils, "getSystemTimezone");

describe("jest.spyOn mockImplementation", () => {
  // 🦄 Comment following line, change mockReset to mockRestore to see how second test behaves differently
  // Do not worry about why this is happening, for now just keep in mind this behavior. this will help us to
  // understand the next module in better way.
  afterEach(() => getSystemTimezoneSpy.mockReset());
  getSystemTimezoneSpy.mockImplementation(() => "America/New_York");
  test("Mock with custom implementation and spy", () => {
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
  });

  test("Mock with custom implementation and spy", () => {
    // getSystemTimezoneSpy.mockImplementation(() => "America/Texas");
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
  });
});

describe("jest.spyOn mockImplementationOnce", () => {
  test("Mock with custom implementation and spy", () => {
    // This is another kind of utility provided by jest, instead of saying mockImplementation we can rather
    // say mockImplementationOnce, This will make sure this implementation is applicable for only one call of this
    // function any subsequent call will then get default implementation of the function.
    // This is particularly useful when we know that given function will be called some predefined number of times
    // during the lifecycle of this test and we want to enforce different behavior each time that function is called.
    getSystemTimezoneSpy.mockImplementationOnce(() => "America/New_York_1");
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(2);
  });

  test("Mock with custom implementation and spy", () => {
    getSystemTimezoneSpy.mockImplementationOnce(() => "America/Texas_2");
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(3);
  });
});
