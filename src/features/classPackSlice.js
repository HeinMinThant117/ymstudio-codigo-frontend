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
      price: null,
      promoCode: null,
    },
  },
  extraReducers: {
    [getClassPacks.fulfilled]: (state, action) => {
      state.all.data = action.payload.data;
      state.all.status = "fulfilled";
    },
    [getOrderedClassPack.fulfilled]: (state, action) => {
      const packPrice = action.payload.data.pack_price.toFixed(2);
      const gst = ((packPrice * 7) / 100).toFixed(2);
      const priceObj = {
        subtotal: (packPrice - gst).toFixed(2),
        gst,
        discount: 0,
        grandTotal: packPrice,
      };

      state.ordered.data = action.payload.data;
      state.ordered.price = priceObj;
      state.ordered.status = "fulfilled";
    },
  },
});

export default classPackSlice.reducer;
