import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface promoPageReducerState {
  currentSelection: number;
  numberValue: string;
  checkBoxState: boolean;
  errorMessage: string;
}

const initialState: promoPageReducerState = {
  currentSelection: 1,
  numberValue: "",
  checkBoxState: false,
  errorMessage: "",
};

const promoPageReducer = createSlice({
  name: "promoPageReducer",
  initialState,
  reducers: {
    setCurrentSelection: (state, action: PayloadAction<number>) => {
      state.currentSelection = action.payload;
    },
    setNumberValue: (state, action: PayloadAction<string>) => {
      if (state.numberValue.length < 10) {
        state.numberValue += action.payload;
      }
    },
    delLastNumberValue: (state) => {
      state.numberValue = state.numberValue.slice(
        0,
        state.numberValue.length - 1
      );
    },
    setReturnCheckBox: (state) => {
      state.checkBoxState = !state.checkBoxState;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setCurrentSelection,
  setNumberValue,
  delLastNumberValue,
  setReturnCheckBox,
  setErrorMessage,
} = promoPageReducer.actions;

export default promoPageReducer.reducer;
