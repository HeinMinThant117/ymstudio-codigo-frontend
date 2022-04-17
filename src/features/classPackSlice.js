import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import classPackService from "../services/classPack";

export const getClassPacks = createAsyncThunk(
  "classPackSlice/getClassPacks",
  async () => {
    const response = await classPackService.fetchAll();
    return response.data;
  }
);

export const getOrderedClassPack = createAsyncThunk(
  "classPackSlice/getOrderedClassPack",
  async (id) => {
    const response = await classPackService.fetchOne(id);
    return response.data;
  }
);

export const classPackSlice = createSlice({
  name: "classPack",
  initialState: {
    all: {
      status: null,
      data: [],
    },
    ordered: {
      status: null,
      data: null,
    },
  },
  extraReducers: {
    [getClassPacks.fulfilled]: (state, action) => {
      state.all.data = action.payload.data;
    },
    [getOrderedClassPack.fulfilled]: (state, action) => {
      state.ordered.data = action.payload.data;
      state.ordered.status = "fulfilled";
    },
  },
});

export default classPackSlice.reducer;
