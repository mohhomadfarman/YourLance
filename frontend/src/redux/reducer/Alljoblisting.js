import { createSlice } from "@reduxjs/toolkit";

import {  allJoblsit } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const AllJobListings = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(allJoblsit.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(allJoblsit.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(allJoblsit.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default AllJobListings.reducer;
