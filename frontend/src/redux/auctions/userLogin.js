

import { ApiLive } from "../../config/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: ApiLive,
  headers: {
    "Content-Type": "application/json",
  },
});
export const loginApi = (data) => async () => {
  
  
let login = axiosInstance.post("login", data);
console.log(login)


  return login

};
