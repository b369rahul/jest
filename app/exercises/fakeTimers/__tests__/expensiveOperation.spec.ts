/**
 * 🚨🚨🚨🚨 We should not always use fakeTimers, there are some scenarios where we want to use real timers intentionally.
 * fakeTimers mocks performance APIs too. Now if we want to ensure that our function performs well on some benchmark
 * we actually want to use real timers and not fake one.
 */

import { expensiveOperation } from "../expensiveOperation";

// 🦄 Try uncommenting following line
// jest.useFakeTimers();

test("expensiveOperation should execute within 500 milliseconds", () => {
  const startTime = performance.now();

  expensiveOperation();

  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(executionTime);
  // Using real timers provides accurate performance measurement
  expect(executionTime).toBeLessThanOrEqual(200);
});
