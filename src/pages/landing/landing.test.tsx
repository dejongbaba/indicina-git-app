import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";

//  test that the page loads with the login button

// test that the page redirects when a button is clicked

test("the page loads with a login to github button", () => {
  render(<Landing />);
  const linkElement = screen.getByText(/login to github/i);
  expect(linkElement).toBeInTheDocument();
});
