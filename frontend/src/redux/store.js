import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register";
import loginReducer from "./reducer/usersLogin";
import userDataSliceReducer from "./reducer/UserSlice";
import jobDataSliceReducer from "./reducer/JobPostingSlice";
import jobsearchfetch from "./reducer/jobFetch";
import MediaUploadReducer from './reducer/MediaUpload';

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userDataSliceReducer,
    Jobposting: jobDataSliceReducer,
    Jobfetch: jobsearchfetch,
    mediaUpload: MediaUploadReducer,

    // Add other reducers here if needed
  },
});

export default store;
