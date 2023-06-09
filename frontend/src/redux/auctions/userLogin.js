

import { CurrentApi } from "../../config/config";
import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginApi = createAsyncThunk("login", async (payload) => {
  const response = await axiosInstance.post(`login`, payload)
  return response.data;
})
// export const getUserDetails = (payload) => async () => {
//   let UserFetch = axiosInstance.post("usersDetails", payload);
//     return UserFetch 
//   };

export const getUserDetails = createAsyncThunk("client", async (payload) => {
  const response = await axiosInstance.post(`usersDetails`, payload)
  return response.data;
  
})
