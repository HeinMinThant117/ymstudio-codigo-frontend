import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/authSlice";
import classPackReducer from "../features/classPackSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    classPack: classPackReducer,
  },
});
