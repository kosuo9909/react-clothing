import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (err) {}
};

const persistedState = loadState();
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});
