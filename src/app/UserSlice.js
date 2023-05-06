import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    currentUserEmail: 'Petko',
  },

  reducers: {
    checkLoggedIn(state, action) {
      if (action.payload.type === 'LoggedIn') {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
    currentUserEmailUpdate(state, action) {
      state.currentUserEmail = action.payload.email;
    },
  },
});

export const { checkLoggedIn, currentUserEmailUpdate } = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
