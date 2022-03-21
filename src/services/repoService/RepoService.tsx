import { getToken } from "../../utils/utils";
import ApiService from "../apiService/ApiService";

ApiService.init(process.env.REACT_APP_GRAPH_QL_URI ?? "");
ApiService.setHeader(getToken() ?? "");
const RepoService = {
  getAllRepositories: () => {
    const query = `search(type: REPOSITORY, first: 30, query: "") {
        edges {
          node {
            ... on Repository {
              id
              owner {
                id
                avatarUrl
              }
              name
              updatedAt
              description
              stargazerCount
            }
          }
        }
      }`;
    return new Promise(function (resolve, reject) {
      ApiService.post("", { query })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  search: (term: string) => {
    const query = `search(type: REPOSITORY, first: 30, query: ${term}) {
        edges {
          node {
            ... on Repository {
              id
              owner {
                id
                avatarUrl
              }
              name
              updatedAt
              description
              stargazerCount
            }
          }
        }
      }`;
    return new Promise(function (resolve, reject) {
      ApiService.post("", { query })
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
