/**
 * 😮‍💨 Finally, we have a simple jest method to understand.
 * mockClear
 * This function doesn't do any extra thing one and simple task of just clearing out mock related things like calls, etc
 */
import * as utils from "../utils/getSystemTimezone";

describe("mockClear", () => {
  test("mockClear test", () => {
    const utilsSpy = jest
      .spyOn(utils, "getSystemTimezone")
      .mockImplementation(() => "America/New_york");

    console.log(utils.getSystemTimezone());
    expect(utilsSpy).toHaveBeenCalledTimes(1);

    utilsSpy.mockClear();

    console.log(utils.getSystemTimezone());
    expect(utilsSpy).toHaveBeenCalledTimes(1);
  });
});
