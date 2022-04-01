import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

test("test that cardlist appears", () => {
  const data = [
    {
      bio: "Hello",
      description: "Hello",
      email: "ehl@ghe.com",
      licenseInfo: { name: "git license" },
      name: "hello",
      type: "user",
      updatedAt: "01/04/2022",
    },
    {
      bio: "Hello",
      description: "Hello",
      email: "ehl@ghe.com",
      licenseInfo: { name: "git license" },
      name: "hello",
      type: "user",
      updatedAt: "01/04/2022",
    },
    {
      bio: "Hello",
      description: "Hello",
      email: "ehl@ghe.com",
      licenseInfo: { name: "git license" },
      name: "hello",
      type: "user",
      updatedAt: "01/04/2022",
    },
  ];
  // render(<CardList data={data} currentPage={1} />);
});
