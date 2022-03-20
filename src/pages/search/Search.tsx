import { ChangeEvent, useEffect } from "react";
import Button from "../../components/button/Button";
import "./search.scss";
import logo from "../../assets/images/github-logo.svg";
import { SearchOutlined } from "@ant-design/icons";
import Input from "antd/lib/input/Input";
import RepoService from "../../services/repoService/RepoService";
import { useNavigate } from "react-router";

function Landing() {
  const navigate = useNavigate();
  const onHandleSearch = (e: ChangeEvent<HTMLInputElement>) => {};
  const goToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    RepoService.getAllRepositories()
      .then(() => {})
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="page__search">
      <div className="page__search__section">
        <img className="page__search__logo" src={logo} alt="GITHUB LOGO" />
        <div className="my-1-5">
          <Input
            onChange={onHandleSearch}
            className="page__search__input"
            placeholder="input search text"
            size="large"
            suffix={<SearchOutlined />}
          />
        </div>
        <Button type="button" onClick={goToHome} title="Search Github" />
      </div>
    </div>
  );
}

export default Landing;
