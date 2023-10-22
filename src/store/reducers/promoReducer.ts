import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface promoReducerState {
  showComponentPromoBanner: boolean;
  currentSelection: number;
  numberValue: string;
  checkBoxState: boolean;
  errorMessage: string;
}

const initialState: promoReducerState = {
  showComponentPromoBanner: false,
  currentSelection: 1,
  numberValue: "",
  checkBoxState: false,
  errorMessage: "",
};

const promoReducer = createSlice({
  name: "promoReducer",
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
    SetShowComponentPromoBanner: (state, action: PayloadAction<boolean>) => {
      state.showComponentPromoBanner = action.payload;
    },
  },
});

export const {
  setCurrentSelection,
  setNumberValue,
  delLastNumberValue,
  setReturnCheckBox,
  setErrorMessage,
  SetShowComponentPromoBanner,
} = promoReducer.actions;

export default promoReducer.reducer;
