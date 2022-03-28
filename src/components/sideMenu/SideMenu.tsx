import { formatNumber } from "../../utils/utils";
import "./sideMenu.scss";

type SideMenuProps = {
  repoCount: string;
  userCount: string;
  onClickUsers: () => void;
  onClickRepos: () => void;
};

export default function SideMenu({
  repoCount,
  userCount,
  onClickUsers,
  onClickRepos,
}: SideMenuProps) {
  return (
    <nav className="side__menu">
      <ul>
        <li onClick={onClickUsers} className="side__menu__item">
          <span>User</span>
          <span>{formatNumber(userCount)}</span>
        </li>
        <li onClick={onClickRepos} className="side__menu__item">
          <span>Repositories</span>
          <span>{formatNumber(repoCount)}</span>
        </li>
      </ul>
    </nav>
  );
}
