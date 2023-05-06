import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    checkLoggedIn(state, action) {
      if (action.payload.type === 'LoggedIn') {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const { checkLoggedIn } = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
