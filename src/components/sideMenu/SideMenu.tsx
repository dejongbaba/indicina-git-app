import { ReactNode } from "react";
import "./sideMenu.scss";
type SideMenuProp = {
  children: ReactNode;
};
export default function SideMenu() {
  return (
    <nav className="side__menu">
      <ul>
        <li className="side__menu__item">
          <a href="#">User</a>
          <a href="#">12003</a>
        </li>
        <li className="side__menu__item">
          <a href="#">Repositories</a>
          <a href="#">34000</a>
        </li>
      </ul>
    </nav>
  );
}
