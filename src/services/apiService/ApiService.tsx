import axios from "axios";

axios.interceptors.response.use(
  function (successRes) {
    if (successRes.data.status === 401) {
      sessionStorage.clear();
      window.location.href = "/";
      return null;
    }
    return successRes;
  },
  function (error) {
    if (error.response?.status === 401) {
      sessionStorage.clear();
      window.location.href = "/";
      return Promise.reject(error);
    }
  }
);
const ApiService = {
  baseUrl: "",
  init(baseURL: string) {
    ApiService.baseUrl = baseURL;
    axios.defaults.baseURL = baseURL;
  },
  getBaseUrl() {
    return ApiService.baseUrl;
  },
  setHeader(token: string) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource: string) {
    return axios.get(resource);
  },

  post(resource: string, data: { [key: string]: any }) {
    return axios.post(resource, data);
  },

  put(resource: string, data: { [key: string]: any }) {
    return axios.put(resource, data);
  },

  delete(resource: string, data: { [key: string]: any }) {
    return axios.delete(resource, data);
  },

  customRequest(data: string) {
    return axios(data);
  },
};

export default ApiService;
