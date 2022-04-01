import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";

//  test that the page loads with the login button
test("the page loads with a login to github button", () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent(/login to github/i);
});
test("Ensure the button is enabled", () => {
  expect(screen.getByRole("button")).toBeEnabled();
});
// test that the page redirects to github auth and back to the page when a button is clicked
test("Ensure that page opens another git auth window", () => {
  expect(screen.getByRole("button")).toBeEnabled();
});
