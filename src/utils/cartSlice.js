import { createReducer, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    reomveItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, reomveItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
