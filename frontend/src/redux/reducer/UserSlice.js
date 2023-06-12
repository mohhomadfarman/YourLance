import { createSlice } from '@reduxjs/toolkit';
import { getUserDetails } from '../auctions/userLogin';

const initialState = {
    isLoading: false,
    DataList: [],
    error:"",

}
const userDataSlice = createSlice({
    name:"userData",
    initialState,
    // reducers: {
    //     dataStart: (state, action) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     },
    //     dataSuccess: (state, action) => {
    //       state.isLoading = false;
    //       state.DataList = action?.payload;
    //     },
    //     dataFailure: (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.payload;
    //     },
    //   },

    extraReducers: (bulider) => {
        bulider.addCase(getUserDetails.pending,(state, action) => {
            state.isLoading = true;
        })
        bulider.addCase(getUserDetails.fulfilled,(state, action) => {
            state.isLoading = false;
            state.DataList = action?.payload;
            state.error = "";
        })
        bulider.addCase(getUserDetails.rejected,(state, action) => {
            state.error = "";

        })
    }
})

export const { dataStart, dataSuccess, dataFailure } = userDataSlice.actions;
export default userDataSlice.reducer;