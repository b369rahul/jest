/**
 * jest.useFakeTimers
 *
 * It is very easy to enable fakeTimers in test you just need to call jest.useFakeTimers, This is replacing
 * the original implementation of setTimeout() and other timer functions. Timers can be restored to their normal
 * behavior with jest.useRealTimers().
 *
 * Utility under test is simple, it sets up the interval of 1 second and calls the provided callback function till
 * seconds passed to the utility reaches zero. So we have passed 5 seconds and callback function to the utility.
 */

import { countdown } from "../timer";

describe("useFakeTimers", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  test("Calls the callback function until count reaches zero", () => {
    const callback = jest.fn();
    const seconds = 5;

    countdown(seconds, callback);

    expect(callback).not.toBeCalled();

    const date1 = new Date();
    // advance the time by 5 seconds 😱
    jest.advanceTimersByTime(seconds * 1000);
    const date2 = new Date();
    console.log(date2.getTime() - date1.getTime(), date1); // this will be exactly 5 seconds

    // since 5 seconds elapsed, our callback function should have been called 5 times with number of seconds remaining
    expect(callback).toHaveBeenCalledTimes(5);

    expect(callback.mock.calls).toEqual([
      [5], // 5 seconds remaining
      [4], // 4 seconds remaining
      [3], // 3 seconds remaining
      [2], // 2 seconds remaining
      [1], // 1 second remaining
    ]);
  });

  test("stops calling the callback after the countdown reaches zero", () => {
    const callback = jest.fn();
    const seconds = 3;

    countdown(seconds, callback);

    // Fast-forward the timers by 3 seconds
    jest.advanceTimersByTime(seconds * 1000);

    // Verify that the callback was called 3 times
    expect(callback).toHaveBeenCalledTimes(seconds);

    // Fast-forward the timers by another 2 seconds
    jest.advanceTimersByTime(2000);

    // Since seconds we passed to the utility already reached zero callback should not be called now
    expect(callback).toHaveBeenCalledTimes(seconds);
  });
});
