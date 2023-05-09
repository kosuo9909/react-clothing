import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    currentUserEmail: 'Petko',
    currentUserID: null,
    hasProfile: false,
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
    hasProfileUpdate(state, action) {
      if (action.payload.type === true) {
        state.hasProfile = true;
      } else {
        state.hasProfile = false;
      }
    },
  },
});

export const {
  checkLoggedIn,
  currentUserEmailUpdate,
  currentUserIdUpdate,
  hasProfileUpdate,
} = cartSlice.actions;
export { cartSlice };
export default cartSlice.reducer;
