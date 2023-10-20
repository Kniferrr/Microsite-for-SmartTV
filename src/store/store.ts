import { configureStore } from "@reduxjs/toolkit";
import promoPageReducer from "./reducers/promoPageReducer";

const store = configureStore({
  reducer: {
    promoPageReducer: promoPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
