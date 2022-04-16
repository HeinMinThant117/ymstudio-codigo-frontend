import { createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    errors: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await authService.login(data);
      if(response.status === 200) {
        dispatch(setToken(response.data));
      }
    } catch (error) {
      if (error.response.status === 401) {
        setErrors(["Your email or password is incorrect"]);
      } else if (error.response.status === 422) {
        const validationErrorObj = error.response.data.errors;
        const validatedErrors = [];

        Object.keys(validationErrorObj).forEach((error) =>
          validationErrorObj[error].map((error) => validatedErrors.push(error))
        );

        dispatch(setErrors(validatedErrors));
      }
    }
  };
};

export const { setToken, setErrors } = authSlice.actions;

export default authSlice.reducer;
