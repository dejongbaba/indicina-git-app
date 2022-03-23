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
        placeholder="Search"
        size="large"
        suffix={<SearchOutlined />}
      />
      <Dropdown overlay={menu} className="navigation__dropdown">
        <span className=" ant-dropdown-link">
          <img
            className="navigation__dropdown__image"
            src={userImage}
            alt="profile placeholder"
          />{" "}
          <span className="navigation__dropdown__text">John Doe</span>
          <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
}

const menu = (
  <Menu>
    <Menu.Item danger>Logout</Menu.Item>
  </Menu>
);

export default NavigationBar;
