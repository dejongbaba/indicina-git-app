import {
  render,
  screen,
  fireEvent,
  waitFor,
  RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
// test that the home page screen is rendered

// test that it shows input and search
let documentBody: RenderResult;
test("Home renders properly", async () => {
  //  and shows search input and button
  documentBody = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const button = screen.getByText(/search"/i);
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText("search")).toBeinDocument();
  });
});
