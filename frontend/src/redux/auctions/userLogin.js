

import { CurrentApi } from "../../config/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});
export const loginApi = (data) => async () => {
  
  
let login = axiosInstance.post("login", data);


  return login

};
