import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/Authentication/Features/auth/authSlice';
import inmateReducer from './components/InmateServices/inmateSlice';
import dialogReducer from './components/Dialog/dialogSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    inmates: inmateReducer,
    dialog: dialogReducer,
  },
});
