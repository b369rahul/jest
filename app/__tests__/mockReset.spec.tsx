/**
 * mockReset
 * As the name suggest this will only reset the mocks back to its original state i.e will clear the mockFn.mock.calls,
 * mockFn.mock.instances, mockFn.mock.contexts and mockFn.mock.results and it will behave like freshly created jest.fn().
 *
 * 🚨🚨🚨 Wait what isn't this is the same thing we read for mockRestore too 🤔. Yes, naming convention and what these functions
 * are doing will start to make sense after this 🥳.
 *
 * So as the name suggest, restore is used when you want to restore the original implementation of the function.
 * and since it is restoring it makes sense to reset all mock related things like calls and all back to its initial stage.
 *
 * and now for mockReset, it will only reset the mock related things like calls, etc. mocked function will still remain mocked.
 * 
 * So basically mockRestore not only restores the original implementation but also deletes it from spy state, while for
 * mockReset it restores original state but does not delete it from spy state. For better understanding please read
 * third test or here are the implementation details of both these functions from jest as of 🚨 version 29.5.0 🚨.
 * 
 * f.mockReset = () => {
    f.mockClear();
    this._mockConfigRegistry.delete(f);

    if (spyState != null) {
      spyState.reset?.();
    }

    return f;
  };

  f.mockRestore = () => {
    f.mockClear();
    this._mockConfigRegistry.delete(f);

    if (spyState != null) {
      spyState.restore();
      this._spyState.delete(spyState);
    }
  };

  observe the difference between two functions, only difference here is mockRestore deletes from spyState and mockReset doesn't
 */

import { Counter } from "../components/Counter";
import * as utils from "../utils/getSystemTimezone";
import { render } from "@testing-library/react";

describe("mockReset", () => {
  test("mockReset test", () => {
    const utilsSpy = jest
      .spyOn(utils, "getSystemTimezone")
      .mockImplementation(() => "America/New_york");

    const { rerender } = render(<Counter />);
    expect(utilsSpy).toHaveBeenCalledTimes(1);

    utilsSpy.mockReset();

    rerender(<Counter />);
    expect(utilsSpy).toHaveBeenCalledTimes(1);
  });

  test("Difference between mockReset and mockRestore", () => {
    const utilsSpy = jest
      .spyOn(utils, "getSystemTimezone")
      .mockImplementation(() => "America/New_York");

    console.log(utils.getSystemTimezone(), "from test");
    expect(utilsSpy).toHaveBeenCalledTimes(1);

    console.log(utils.getSystemTimezone);
    // 🦄 change following line to mockRestore.
    utilsSpy.mockReset();
    console.log(utils.getSystemTimezone);

    console.log(utils.getSystemTimezone(), "from test");
    expect(utilsSpy).toHaveBeenCalledTimes(1);
  });
});
