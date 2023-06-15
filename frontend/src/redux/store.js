import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register";
import loginReducer from "./reducer/usersLogin";
import userDataSliceReducer from "./reducer/UserSlice";
import jobDataSliceReducer from "./reducer/JobPostingSlice";
import jobsearchSliceReducer from "./reducer/jobsearch";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userDataSliceReducer,
    Jobposting: jobDataSliceReducer,
    Jobsearch: jobsearchSliceReducer,

    // Add other reducers here if needed
  },
});

export default store;
