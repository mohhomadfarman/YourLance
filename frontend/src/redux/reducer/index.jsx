import { combineReducers } from '@reduxjs/toolkit';
import { resisterReducer } from './reducer/register';
// import counterReducer from '../features/counter/counterSlice';

export const store = combineReducers({

   resister :  resisterReducer 
    

});
