import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

 const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export default store;