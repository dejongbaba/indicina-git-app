import LoginGithub from "react-login-github";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/apiService/ApiService";
import AuthService from "../../services/authService/authService";
import { CONSTANTS } from "../../utils/utils";
import "./landing.scss";

function Landing() {
  const navigator = useNavigate();
  const onSuccess = (response: { [key: string]: any }) => {
    ApiService.init(process.env.REACT_APP_AUTH_API ?? "");
    AuthService.authenticateUser(response)
      .then((res: any) => {
        sessionStorage.setItem(CONSTANTS.ACCESS_TOKEN, res.access_token);
        navigator("/home");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const onFailure = (response: { [key: string]: any }) =>
    console.error("error", response);

  return (
    <div className="landing">
      <LoginGithub
        className="indicina__button"
        buttonText="Login to Github"
        clientId={process.env.REACT_APP_CLIENT_ID || ""}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default Landing;
