import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import classPackService from "../services/classPack";

export const getClassPacks = createAsyncThunk(
  "classPackSlice/getClassPacks",
  async () => {
    const response = await classPackService.fetchAll();
    return response.data;
  }
);

export const classPackSlice = createSlice({
  name: "classPack",
  initialState: {
    status: null,
    data: [],
  },
  reducers: {
    setClassPacks: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [getClassPacks.pending]: (state, action) => {
      state.status = "pending";
    },
    [getClassPacks.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.status = "fulfilled";
    },
    [getClassPacks.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default classPackSlice.reducer;
