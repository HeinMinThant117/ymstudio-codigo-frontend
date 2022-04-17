import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import classPackService from "../services/classPack";
import orderService from "../services/order";
import promocodeService from "../services/promocode";

export const getClassPacks = createAsyncThunk(
  "classPackSlice/getClassPacks",
  async () => {
    const response = await classPackService.fetchAll();
    return response.data;
  }
);

export const getClassPack = createAsyncThunk(
  "classPackSlice/getClassPack",
  async (id) => {
    const response = await classPackService.fetchOne(id);
    return response.data;
  }
);

export const orderClassPack = createAsyncThunk(
  "classPackSlice/orderClassPack",
  async (data) => {
    const token = JSON.parse(sessionStorage.getItem("user")).token;
    const response = await orderService.submit(token, data);
    return response.data;
  }
);

export const getOrderedClassPack = createAsyncThunk(
  "classPackSlice/getOrderedClassPack",
  async (id) => {
    const token = JSON.parse(sessionStorage.getItem("user")).token;
    const response = await orderService.getOrder(token, id);
    return response.data;
  }
);

export const checkPromocode = createAsyncThunk(
  "classPackSlice/checkPromocode",
  async (promocode, { rejectWithValue }) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("user")).token;
      const response = await promocodeService.verify(token, {
        promo_code: promocode,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
      });
    }
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
      promocode: {
        code: null,
        message: null,
      },
      orderID: null,
    },
  },
  reducers: {
    setOrderedStatus: (state, action) => {
      state.ordered.status = action.payload;
    },
  },
  extraReducers: {
    [getClassPacks.fulfilled]: (state, action) => {
      state.all.data = action.payload.data;
      state.all.status = "fulfilled";
    },
    [getClassPack.fulfilled]: (state, action) => {
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
      state.ordered.status = "preview";
      state.ordered.orderID = null;
      state.ordered.promocode.message = null;
    },
    [orderClassPack.fulfilled]: (state, action) => {
      const priceObj = {
        subtotal: action.payload.subtotal,
        gst: action.payload.gst,
        discount: action.payload.discount,
        grandTotal: action.payload.grand_total,
      };

      state.ordered.status = "confirmed";
      state.ordered.data = {
        ...action.payload.class_packs[0],
        pack_price: action.payload.class_packs[0].pivot.price,
      };
      state.ordered.price = priceObj;
      state.ordered.orderID = action.payload.id;
    },
    [getOrderedClassPack.fulfilled]: (state, action) => {
      if (action.payload === null) {
        state.ordered.status = "not_found";
      } else {
        const priceObj = {
          subtotal: action.payload.subtotal,
          gst: action.payload.gst,
          discount: action.payload.discount,
          grandTotal: action.payload.grand_total,
        };

        state.ordered.status = "found";
        state.ordered.data = {
          ...action.payload.class_packs[0],
          pack_price: action.payload.class_packs[0].pivot.price,
        };
        state.ordered.price = priceObj;
      }
    },
    [checkPromocode.fulfilled]: (state, action) => {
      const discountPrice = (
        (state.ordered.price.subtotal * action.payload.discount) /
        100
      ).toFixed(2);

      state.ordered.promocode.message = action.payload.message;
      state.ordered.promocode.code = action.payload.code;
      state.ordered.price.discount = discountPrice;
    },
    [checkPromocode.rejected]: (state, action) => {
      state.ordered.promocode.message = action.payload.message;
      state.ordered.price.discount = 0;
    },
  },
});

export const { setOrderedStatus } = classPackSlice.actions;
export default classPackSlice.reducer;
