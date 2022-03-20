import { getToken } from "../../utils/utils";
import ApiService from "../apiService/ApiService";

ApiService.init(process.env.REACT_APP_GRAPH_QL_URI ?? "");
ApiService.setHeader(getToken() ?? "");
const RepoService = {
  getAllRepositories: (limit = 50, page = 1) => {
    return new Promise(function (resolve, reject) {
      ApiService.get(``)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  search: (term: string) => {
    return new Promise(function (resolve, reject) {
      ApiService.get(`?search_string=${term}`)
        .then((res) => {
          if (res.status !== 200) {
            return reject(res.data);
          }
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default RepoService;
