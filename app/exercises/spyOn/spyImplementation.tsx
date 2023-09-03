/**
 * jest.spyOn
 * This is extension of spyOn chapter only. With the details of how to override the default implementation of
 * any function, for simplicity here are using file from our local system only, but this is equally applicable to
 * any function imported from node_modules too.
 */
import * as utils from "../../utils/getSystemTimezone";

// We want to write a test where we want to enforce the custom implementation of getSystemTimezone function
const getSystemTimezoneSpy = jest
  .spyOn(utils, "getSystemTimezone")
  .mockImplementation(() => "America/New_York");

describe("jest.spyOn", () => {
  // As explained in the earlier chapter since spyOn is just a mock function we can restore the original implementation
  // do not worry about the function currently we will be covering it in the module of restore and reset mocks.
  // 🦄 comment following line to check the behavior of second test.
  afterEach(() => getSystemTimezoneSpy.mockRestore());

  test("Mock with custom implementation and spy", () => {
    console.log(utils.getSystemTimezone());
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
  });

  // 🦄 remove .skip
  test.skip("Mock with custom implementation and spy", () => {
    // This will now run the default implementation of the function
    console.log(utils.getSystemTimezone());
    // Since default behavior is restore we will no longer be spying over the module
    // so jest will no longer track the calls of this function now.
    expect(getSystemTimezoneSpy).toHaveBeenCalledTimes(1);
  });
});
