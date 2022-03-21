import ApiService from "../apiService/ApiService";

export interface ResponseModel {
  access_token: string;
  scope: string;
  token_type: string;
}

const AuthService = {
  authenticateUser: (data: { [key: string]: any }) => {
    return new Promise(function (resolve, reject) {
      ApiService.post("", data)
        .then((res) => {
          console.log("res", res);
          resolve(res.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default AuthService;
