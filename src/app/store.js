import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import classPackReducer from "../features/classPackSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    classPack: classPackReducer,
  },
});
