import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    total: 0,
    itemsCount: 0,
    item: [],
    dummy: true,
  },
  reducers: {
    dummy_update(state) {
      state.dummy = !state.dummy;
    },
    add_item: (state, action) => {
      const { id, price, item, image } = action.payload.item;
      const existingItem = state.item.find((item) => item.id === id);
      try {
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.item.push({ id, item, price, image, quantity: 1 });
        }
        state.total += price;
        state.itemsCount += 1;
      } catch (err) {
        console.log(err.message);
      }
    },

    increase_quantity(state, action) {
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      existingItem.quantity += 1;
      state.total += existingItem.price;
      state.itemsCount += 1;
    },

    decrease_quantity(state, action) {
      try {
        const existingItem = state.item.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.total -= existingItem.price;
          state.itemsCount -= 1;
        } else {
          state.total -= existingItem.price;
          state.itemsCount -= 1;
          const index = state.item.indexOf(existingItem);
          state.item.splice(index, 1);
        }
      } catch (err) {
        console.log(err.message);
      }
    },

    clear_cart: (state) => {
      state.item = [];
    },
  },
});

export const {
  add_item,
  decrease_quantity,
  clear_cart,
  increase_quantity,
  dummy_update,
} = cartSlice.actions;

export default cartSlice.reducer;
