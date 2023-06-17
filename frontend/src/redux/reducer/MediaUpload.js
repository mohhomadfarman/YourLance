import { createSlice } from "@reduxjs/toolkit";
import { MediaUploads } from "../auctions/JobPostingAction";

const initialState = {
  isLoading: false,
  jobData: [],
  error: "",
};
const MediaUpload = createSlice({
  name: "MediaUpload",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(MediaUploads.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(MediaUploads.fulfilled, (state, action) => {
      state.isLoading = false;
      state.MediaUpload = action?.payload;
      state.error = "";
    });
    bulider.addCase(MediaUploads.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

// export const  = jobDataSlice.actions;
export default MediaUpload.reducer;
