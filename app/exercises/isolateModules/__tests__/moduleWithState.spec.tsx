/**
 * jest.isolateModules
 * You can think isolateModules as complete separate world. With this jest will create fresh sandbox registry
 * for all the modules we will be loading within this. Nothing from outside this will interfere.
 *
 * Mostly you will be required to look up to isolateModules in cases where the module you want to test
 * has some module level state and you want it to reset between tests.
 *
 * 🚨🚨🚨 It is very important to use isolateModules judiciously and when you absolutely needs this. Overusing this
 * will lead to brittle test and will be hard to maintain the test suites.
 *
 * Point to note: Since isolateModules create fresh sandbox registry for whatever we import in it. Is is required
 * that if your code uses any context providers, it should be imported within isolateModules only. Else it will
 * break saying that is not able to find the context provider.
 */

// 💪🏽 play with following test and can you determine why isolateModules should be used judiciously?
// moment library is imported in the file to make it more clear.
describe("jest.isolateModules", () => {
  test("how isolateModules works", () => {
    // moduleWithState has module level state called `counter` and we are creating two fresh sandbox to tests
    // different scenarios. Observe that local state is not interfering with each other. And we are able to
    // test two cases.
    jest.isolateModules(() => {
      const math = require("../moduleWithState");
      expect(math.getState()).toBe(1);
      math.increment();
      expect(math.getState()).toBe(2);
    });

    jest.isolateModules(() => {
      const math = require("../moduleWithState");
      expect(math.getState()).toBe(1);
      math.increment();
      expect(math.getState()).toBe(2);
    });
  });
});
