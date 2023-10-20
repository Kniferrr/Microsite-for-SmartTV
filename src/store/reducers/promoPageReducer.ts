import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface promoPageReducerState {
  currentSelection: number;
}

const initialState: promoPageReducerState = {
  currentSelection: 0,
};

const promoPageReducer = createSlice({
  name: "promoPageReducer",
  initialState,
  reducers: {
    setCurrentSelection: (state, action: PayloadAction<number>) => {
      state.currentSelection = action.payload;
    },
  },
});

export const { setCurrentSelection } = promoPageReducer.actions;

export default promoPageReducer.reducer;
