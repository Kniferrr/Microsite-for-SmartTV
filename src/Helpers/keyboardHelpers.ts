import {
  delLastNumberValue,
  setCurrentSelection,
  setNumberValue,
  setReturnCheckBox,
} from "../store/reducers/promoPageReducer";
import { validateNumber } from "./FormatNumberHelpers";

export const handleKeyPress = (
  key: string,
  currentSelection: number,
  buttons: number,
  dispatch: (action: any) => void,
  navigate: (path: string) => void,
  numberValue: string = "",
  checkBoxState: boolean = false
) => {
  if (key === "ArrowLeft" && currentSelection > 1) {
    dispatch(setCurrentSelection(currentSelection - 1));
  } else if (currentSelection == 0) {
    dispatch(setCurrentSelection(1));
  } else if (key === "ArrowRight" && currentSelection < buttons) {
    dispatch(setCurrentSelection(currentSelection + 1));
  } else if (key === "Enter") {
    if (buttons === 1 && currentSelection == 14) {
      navigate("/");
    } else if (buttons === 1) {
      navigate("/number-input");
    } else if (currentSelection == 14) {
      navigate("/");
    } else if (currentSelection == 1) {
      dispatch(setNumberValue("1"));
    } else if (currentSelection == 2) {
      dispatch(setNumberValue("2"));
    } else if (currentSelection == 3) {
      dispatch(setNumberValue("3"));
    } else if (currentSelection == 4) {
      dispatch(setNumberValue("4"));
    } else if (currentSelection == 5) {
      dispatch(setNumberValue("5"));
    } else if (currentSelection == 6) {
      dispatch(setNumberValue("6"));
    } else if (currentSelection == 7) {
      dispatch(setNumberValue("7"));
    } else if (currentSelection == 8) {
      dispatch(setNumberValue("8"));
    } else if (currentSelection == 9) {
      dispatch(setNumberValue("9"));
    } else if (currentSelection == 11) {
      dispatch(setNumberValue("0"));
    } else if (currentSelection == 10) {
      dispatch(delLastNumberValue());
    } else if (currentSelection == 12) {
      dispatch(setReturnCheckBox());
    } else if (currentSelection == 13) {
      validateNumber(numberValue, navigate, checkBoxState, dispatch);
    }
  } else if (key === "ArrowUp") {
    if (currentSelection > 3 && currentSelection <= 9) {
      dispatch(setCurrentSelection(currentSelection - 3));
    } else if (
      currentSelection == 11 ||
      currentSelection == 10 ||
      currentSelection == 12
    ) {
      dispatch(setCurrentSelection(currentSelection - 2));
    } else if (currentSelection == 13 || currentSelection == 14) {
      dispatch(setCurrentSelection(currentSelection - 1));
    } else if (currentSelection == 0) {
      dispatch(setCurrentSelection(1));
    }
  } else if (key === "ArrowDown") {
    if (currentSelection > 0 && currentSelection < 8 && buttons !== 1) {
      dispatch(setCurrentSelection(currentSelection + 3));
    } else if (
      currentSelection == 9 ||
      currentSelection == 8 ||
      currentSelection == 10
    ) {
      dispatch(setCurrentSelection(currentSelection + 2));
    } else if (
      currentSelection == 11 ||
      currentSelection == 12 ||
      currentSelection == 13
    ) {
      dispatch(setCurrentSelection(currentSelection + 1));
    } else if (currentSelection == 0) {
      dispatch(setCurrentSelection(1));
    }
  } else if (key === "Escape") {
    navigate("/");
  } else if (key === "Backspace") {
    dispatch(delLastNumberValue());
  } else if (key === "Delete") {
    dispatch(delLastNumberValue());
  } else if (key === "1") {
    dispatch(setNumberValue("1"));
  } else if (key === "2") {
    dispatch(setNumberValue("2"));
  } else if (key === "3") {
    dispatch(setNumberValue("3"));
  } else if (key === "4") {
    dispatch(setNumberValue("4"));
  } else if (key === "5") {
    dispatch(setNumberValue("5"));
  } else if (key === "6") {
    dispatch(setNumberValue("6"));
  } else if (key === "7") {
    dispatch(setNumberValue("7"));
  } else if (key === "8") {
    dispatch(setNumberValue("8"));
  } else if (key === "9") {
    dispatch(setNumberValue("9"));
  } else if (key === "0") {
    dispatch(setNumberValue("0"));
  }
};
