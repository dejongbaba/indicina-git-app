import { render, screen } from "@testing-library/react";
import Home from "./Home";
// test that the home page screen is rendered

// test that it has a login button

it("should not have basic accessibility issues", async () => {
  render(<Home />);
  expect(screen.getByText("Hello Jest!")).toBeInTheDocument();
});
