import LoginGithub from "react-login-github";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/apiService/ApiService";
import AuthService from "../../services/authService/authService";
import "./landing.scss";

function Landing() {
  const navigator = useNavigate();
  const onSuccess = (response: { [key: string]: any }) => {
    ApiService.init(process.env.REACT_APP_AUTH_API ?? "");
    AuthService.authenticateUser(response)
      .then((res: any) => {
        sessionStorage.setItem("access_token", res.access_token);
        navigator("/search");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const onFailure = (response: { [key: string]: any }) =>
    console.error(response);

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
