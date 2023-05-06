import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    currentUserEmail: 'Petko',
    currentUserID: null,
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
    currentUserIdUpdate(state, action) {
      state.currentUserID = action.payload.id;
    },
  },
});

export const { checkLoggedIn, currentUserEmailUpdate, currentUserIdUpdate } =
  cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
