/**
 * jest.runOnlyPendingTimers
 * This function is here to handle edge case of advanceTimersByTime. Cases where executing currently scheduled
 * timers will schedule yet another timer and so on. Former function will try to recursively advance the timers
 * till all such timers are exhausted. But that will never happen and you will get dreaded `Aborting after running 100000 timers, assuming an infinite loop!` error
 *
 * runOnlyPendingTimers will only execute the currently scheduled timer but will not schedule any new timer and
 * that will serve our purpose very well.
 */

import { infiniteTimerGame } from "../timerGame";

describe("jest.runOnlyPendingTimers", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("schedules a 10-second timer after 1 second", () => {
    const callback = jest.fn();

    infiniteTimerGame(callback);

    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    // 🦄 Change this to runAllTimers at your own risk
    jest.runOnlyPendingTimers();

    // At this point, our 1-second timer should have fired its callback
    expect(callback).toBeCalled();
  });
});
