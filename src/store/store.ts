import { configureStore } from "@reduxjs/toolkit";
import promoReducer from "./reducers/promoReducer";

const store = configureStore({
  reducer: {
    promoReducer: promoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
