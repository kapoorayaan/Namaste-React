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
    reomveItem: () => {
      state.items.pop();
    },
    clearCart: () => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
