import ApiService from "../apiService/ApiService";

const UserService = {
  getAllUsers: () => {
    return new Promise(function (resolve, reject) {
      const query = `search(type: USER, query: "he", first: 30) {
        edges {
          node {
            ... on User {
              id
              email
              bio
              name
              updatedAt
            }
          }
        }
      }`;
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
    const query = `search(type: USER, query: ${term}, first: 30) {
      edges {
        node {
          ... on User {
            id
            email
            bio
            name
            updatedAt
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
};

export default UserService;
