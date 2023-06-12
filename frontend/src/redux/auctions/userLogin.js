

import { CurrentApi } from "../../config/config";
import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

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

// export const getUserDetails = (payload) => async () => {
//   let UserFetch = axiosInstance.post("usersDetails", payload);
//     return UserFetch 
//   };

export const getUserDetails = createAsyncThunk("client", async (payload) => {
  const response = await axiosInstance.post(`usersDetails`, payload)
  return response.data;
  
})
