import { createSlice } from "@reduxjs/toolkit";
import { jobSearch } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  jobData: [],
  error: "",
};
const SearchJobsData = createSlice({
  name: "MediaUpload",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(jobSearch.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(jobSearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.SearchJobsData = action?.payload;
      state.error = "";
    });
    bulider.addCase(jobSearch.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

// export const  = jobDataSlice.actions;
export default SearchJobsData.reducer;
