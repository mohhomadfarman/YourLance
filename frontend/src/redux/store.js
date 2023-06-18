import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./reducer/register";
import loginReducer from "./reducer/usersLogin";
import userDataSliceReducer from "./reducer/UserSlice";
import jobDataSliceReducer from "./reducer/JobPostingSlice";
import jobsearchfetch from "./reducer/jobFetch";
import MediaUploadReducer from "./reducer/MediaUpload";
import SearchJobsDataReducer from "./reducer/SearchJobsData";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userDataSliceReducer,
    Jobposting: jobDataSliceReducer,
    Jobfetch: jobsearchfetch,
    mediaUpload: MediaUploadReducer,
    jobSearch: SearchJobsDataReducer,
  },
});

export default store;
