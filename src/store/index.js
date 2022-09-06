import { configureStore } from "@reduxjs/toolkit";
import placesReducer, { placesSlice } from "./placesSlice";

export const store = configureStore({
  reducer: {
    [placesSlice.name]: placesReducer,
  },
});
