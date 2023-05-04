import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    total: 0,
    itemsCount: 0,
    item: [],
  },
  reducers: {
    add_item: (state, action) => {
      state.item.push(action.payload.item);
    },

    remove_item: (state) => {
      state.total -= 1;
    },

    clear_cart: (state) => {
      state.item = [];
    },
  },
});

export const { add_item, remove_item, clear_cart } = cartSlice.actions;

export default cartSlice.reducer;
