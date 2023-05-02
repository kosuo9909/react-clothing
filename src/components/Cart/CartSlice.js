import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    total: 0,
    itemsCount: 0,
  },
  reducers: {
    add_item: (state) => {
      state.total += 1;
    },

    remove_item: (state) => {
      state.total -= 1;
    },
  },
});

export const { add_item, remove_item } = cartSlice.actions;

export default cartSlice.reducer;
