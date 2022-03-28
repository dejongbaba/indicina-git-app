import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button title="login to Github" type={"button"} />);
  const linkElement = screen.getByText(/login to Github/i);
  expect(linkElement).toBeInTheDocument();
});
