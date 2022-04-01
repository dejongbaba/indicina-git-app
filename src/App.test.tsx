import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app properly", async () => {
  render(<App />);

  const buttonElement = screen.getByText(/login to github/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);

  await expect(screen.getAllByText(/search/i)).toBeInTheDocument();
});
