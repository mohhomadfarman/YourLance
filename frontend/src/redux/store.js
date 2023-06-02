import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './reducer/register';
import loginReducer from './reducer/usersLogin';

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    // Add other reducers here if needed
  },
});

export default store;
