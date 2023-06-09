import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../auctions/userLogin";

const initialState = {
  isLoading: false,
  DataList: [],
  error: "",
};
const userDataSlice = createSlice({
  name: "userData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(getUserDetails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(getUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.DataList = action?.payload;
      state.error = "";
    });
    bulider.addCase(getUserDetails.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export const { dataStart, dataSuccess, dataFailure } = userDataSlice.actions;
export default userDataSlice.reducer;
