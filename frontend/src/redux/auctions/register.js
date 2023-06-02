import { ApiLive } from "../../config/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: ApiLive,
  headers: {
    "Content-Type": "application/json",
  },
});
export const RegisterApi = (data) => async () => {
  
  
let data2=   axiosInstance.post("register", data);
console.log(data2,'eeeeeeeeeeeeeeeeeeeee')

  return data2

};
