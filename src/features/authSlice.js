import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth";

const getErrorArray = (errors) => {
  const validationErrorObj = errors;
  const validatedErrors = [];
  Object.keys(validationErrorObj).forEach((error) =>
    validationErrorObj[error].map((error) => validatedErrors.push(error))
  );

  return validatedErrors;
};

export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authService.register(data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        errors: error.response.data.errors,
      });
    }
  }
);

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        errors: error.response.data.errors,
      });
    }
  }
);

export const logoutUser = createAsyncThunk("authSlice/logoutUser", async () => {
  const token = JSON.parse(sessionStorage.getItem("user")).token;
  const response = await authService.logout(token);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("user")) || null,
    login: {
      status: null,
      errors: [],
    },
    register: {
      status: null,
      errors: [],
      successMessage: "",
    },
  },
  reducers: {
    setRegisteredSuccess: (state, action) => {
      state.register.status = action.payload;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload.data));
    },
    [loginUser.rejected]: (state, action) => {
      if (action.payload.status === 401) {
        state.login.errors = ["Your email or password is incorrect"];
      } else if (action.payload.status === 422) {
        const validatedErrors = getErrorArray(action.payload.errors);
        state.login.errors = validatedErrors;
      }
    },

    [registerUser.fulfilled]: (state) => {
      state.register.successMessage = "You are registered.";
      state.register.status = "registered";
    },

    [registerUser.rejected]: (state, action) => {
      if (action.payload.status === 401) {
        state.register.errors = ["Your email or password is incorrect"];
      } else if (action.payload.status === 422) {
        const validatedErrors = getErrorArray(action.payload.errors);
        state.register.errors = validatedErrors;
      }
    },

    [logoutUser.fulfilled]: (state, action) => {
      state.user = null;
      sessionStorage.removeItem("user");
    },
  },
});
export const { setRegisteredSuccess } = authSlice.actions;

export default authSlice.reducer;
