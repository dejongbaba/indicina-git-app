import { getToken } from "../../utils/utils";
import ApiService from "../apiService/ApiService";

ApiService.init(process.env.REACT_APP_GRAPH_QL_URI ?? "");
ApiService.setHeader(getToken() ?? "");
const RepoService = {
  getAllRepositories: () => {
    const query = `
    query Repositories {
      viewer {
        bioHTML
        bio
        name
        repositories(first: 10) {
          pageInfo {
            endCursor
            startCursor
          }
          nodes {
            id
            forkCount
            name
            projectsUrl
            updatedAt
            url
            description
          }
        }
      }
    }
      `;
    return new Promise(function (resolve, reject) {
      ApiService.post("", { query })
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  search: (term: string) => {
    const query = `
    query MyQuery {
      search(type: REPOSITORY, first: 30, query: ${term}) {
        edges {
          node {
            ... on Repository {
              id
              name
              label(name: "") {
                id
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        repositoryCount
      }
    }
      `;
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
