import { ChangeEvent } from "react";
import Button from "../button/Button";
import "./search.scss";
import logo from "../../assets/images/github-logo.svg";
import { SearchOutlined } from "@ant-design/icons";
import Input from "antd/lib/input/Input";

type SearchProps = {
  onChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchButton?: () => void;
  searchTerm?: string;
};
function Search({ onChangeSearch, searchTerm, onSearchButton }: SearchProps) {
  return (
    <div className="page__search">
      <div className="page__search__section">
        <img className="page__search__logo" src={logo} alt="GITHUB LOGO" />
        <div className="my-1-5">
          <Input
            value={searchTerm}
            onPressEnter={onSearchButton}
            onChange={onChangeSearch}
            className="page__search__input"
            placeholder="Search"
            size="large"
            suffix={<SearchOutlined />}
          />
        </div>
        <Button type="button" onClick={onSearchButton} title="Search Github" />
      </div>
    </div>
  );
}

export default Search;
