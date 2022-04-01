import { render, screen } from "@testing-library/react";
import SideMenu from "./SideMenu";

test("render side menu with text properties", () => {
  render(
    <SideMenu
      onClickRepos={() => {}}
      onClickUsers={() => {}}
      userCount="5"
      repoCount="5"
    />
  );
  expect(screen.getByAltText(/user/i)).toBeInTheDocument();
  expect(screen.getByAltText(/repositories/i)).toBeInTheDocument();
});
