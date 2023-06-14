import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './reducer/register';
import loginReducer from './reducer/usersLogin';
import userDataSliceReducer from './reducer/UserSlice';
import jobDataSliceReducer from './reducer/JobPostingSlice'

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userDataSliceReducer,
    Jobposting: jobDataSliceReducer,
    
    // Add other reducers here if needed
  },
});

export default store;
