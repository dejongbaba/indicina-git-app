import "./sideMenu.scss";

export default function SideMenu() {
  return (
    <nav className="side__menu">
      <ul>
        <li className="side__menu__item">
          <span>User</span>
          <span>12003</span>
        </li>
        <li className="side__menu__item">
          <span>Repositories</span>
          <span>34000</span>
        </li>
      </ul>
    </nav>
  );
}
