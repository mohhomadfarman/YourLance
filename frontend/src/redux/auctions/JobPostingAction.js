import { CurrentApi } from "../../config/config";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const axiosInstance = axios.create({
  baseURL: CurrentApi,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosInstances = axios.create({
  baseURL: CurrentApi,
    headers: {
    "Content-Type": "application/json",
    "type": "formData"
  },
});

export const JobPosting = createAsyncThunk("Postjob", async (payload) => {
  const response = await axiosInstance.post(`api/job-post`, payload);
  return response.data;
});
export const JobdataD = createAsyncThunk("JobdataD", async (payload) => {
  const response = await axiosInstance.post(`api/job-listing`, payload);
  return response.data;
});
export const MediaUploads = createAsyncThunk("mediaUplad", async (payload) => {
  const response = await axiosInstances.post(`api/upload`, payload);
  return response.data;
});
