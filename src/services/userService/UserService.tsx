import ApiService from "../apiService/ApiService";

const UserService = {
  getAllRepositories: (limit = 50, page = 1) => {
    return new Promise(function (resolve, reject) {
      ApiService.get(
        `admin/get_all_coupon_codes?per_page=${limit}&page=${page}`
      )
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

  search: (term: string) => {
    return new Promise(function (resolve, reject) {
      ApiService.get(`admin/get_all_coupon_codes?search_string=${term}`)
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

export default UserService;
