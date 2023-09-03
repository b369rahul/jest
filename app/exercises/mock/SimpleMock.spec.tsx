/**
 * jest.mock
 * jest will take over the directory structure you ask it to mock and now whenever code will refer to that
 * jest will take control and use our mocks instead of what is written there.
 *
 * Mocking a module with jest.mock() is useful when you want to isolate the unit under test and simulate
 * specific behavior or responses from its dependencies. This approach allows you to control the behavior
 * of the module and focus on testing specific scenarios without relying on the actual implementation of
 * its dependencies.
 *
 * 🚨🚨🚨 jest hoists the mock calls so we can't use anything that is not in the scope inside jest.mock.
 * For example we can't declare variable outside and use it in jest.mock because when jest will hoist the mock
 * calls that variable is still not declared.
 */
import { getSystemTimezone } from "../../utils/getSystemTimezone";
import getUser from "../../utils/defaultExport";

jest.mock("../../utils/getSystemTimezone");
jest.mock("../../utils/defaultExport");

describe("jest.mock", () => {
  test("Simple mock", () => {
    console.log(getSystemTimezone());
  });

  test("Simple mock", () => {
    console.log(getUser());
  });
});
