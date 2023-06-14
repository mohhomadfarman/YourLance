

import { CurrentApi } from "../../config/config";
import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});


export const JobPosting = createAsyncThunk("Postjob", async (payload) => {
  const response = await axiosInstance.post(`api/job-post`, payload)
  return response.data;
  
})
