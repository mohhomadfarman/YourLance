import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './reducer/register';
import loginReducer from './reducer/usersLogin';
import userDataSliceReducer from './reducer/UserSlice';

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    userList: userDataSliceReducer,
    
    // Add other reducers here if needed
  },
});

export default store;
