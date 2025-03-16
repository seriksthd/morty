import { configureStore } from "@reduxjs/toolkit";
import { mortyReducer } from "./slices/mortySlice";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    morty: mortyReducer,
    auth: authSlice.reducer,
  },
});
