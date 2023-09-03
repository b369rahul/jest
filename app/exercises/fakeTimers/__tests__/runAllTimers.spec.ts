/**
 * jest.runAllTimers
 * This is simplified version of jest.advanceTimersByTime. Lets say we don't want to specify by how much
 * time to we want to move our timers, but we want to execute all the timers that are scheduled currently
 * Then this function comes handy. Instead of providing time to move forward just call this function and
 * all the timers that are scheduled will be executed.
 *
 * 🚨🚨🚨 By any chance, if code you are testing has recursive timer, that is callback of one timer starts yet another
 * timer then this function will not serve the purpose. Jest has something in store for that too but thats for next
 * chapter 😉.
 *
 * Basically, use this function if you want to execute all the timers that are scheduled but not if you have recursive timers
 */

import { timerGame } from "../timerGame";

describe("jest.runAllTimers", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("calls the callback after 1 second", () => {
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
