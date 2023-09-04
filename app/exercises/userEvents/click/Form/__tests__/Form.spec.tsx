/**
 * userEvent.click
 * This function simplifies the user click on a specific element, behind the scenes it will automatically
 * fire all the required event listeners like mouseOver and all.
 *
 * It simply expects a element to simulate a click on. After clicking we can make all the assertions to ensure that
 * component behaved correctly. This includes anything like if on clicking we are making API call, we can assert
 * that too.
 *
 * This covers only click event, https://testing-library.com/docs/ecosystem-user-event/ documentation has
 * everything this library has to offer in great details
 */

// Here is the complete test case for testing simple form submission. This used concepts from many other part of the
// workshop and thus will be good for complete revision.
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../Form";
import axios from "axios";

// Spying on the axios module
const get = jest.fn(() => Promise.resolve({ data: "Mocked data" }));
jest.spyOn(axios, "get").mockImplementation(get);

describe("userEvent.click", () => {
  test("click", async () => {
    render(<Form />);

    // typing in the input with userEvent
    await userEvent.type(screen.getByLabelText("Name"), "TestName");

    // click the button to save the data
    userEvent.click(screen.getByRole("button", { name: "Hit API" }));

    // check that we are correctly using the external library axios
    await waitFor(() =>
      expect(get).toHaveBeenCalledWith("https://api.example.com/random")
    );
    await waitFor(() => screen.getByText("Mocked data"));
  });
});
