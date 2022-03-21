import { ChangeEvent } from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Input from "antd/lib/input/Input";
import logo from "../../assets/images/github-logo.svg";
import userImage from "../../assets/images/avatar.svg";
import "./navigationBar.scss";

type NagivationProps = {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};
function NavigationBar({ onSearch }: NagivationProps) {
  return (
    <div className="navigation__bar">
      <img src={logo} alt="GIT LOGO" />
      <Input
        onChange={onSearch}
        className="page__search__input"
        placeholder="input search text"
        size="large"
        suffix={<SearchOutlined />}
      />
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <img src={userImage} alt="user placeholder image" /> John Doe{" "}
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default NavigationBar;
