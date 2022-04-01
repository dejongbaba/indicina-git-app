import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("Search component is rendered properly", () => {
  render(<Search />);
  const searchElement = screen.getByTestId("page-search");
  expect(searchElement).toBeInTheDocument();
});
