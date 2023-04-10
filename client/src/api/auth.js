import * as postApi from "./index";
const afterReceiveAuth = (user_id,user_name, token ) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("user_name", user_name);
  postApi.axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
};

const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_name");
  postApi.axiosInstance.defaults.headers["Authorization"] = "";
};
export { afterReceiveAuth, clearAuth };
