import {
  delLastNumberValue,
  setCurrentSelection,
  setNumberValue,
  setReturnCheckBox,
} from "../store/reducers/promoReducer";
import { validateNumber } from "./FormatNumberHelpers";

export const handleKeyPress = (
  key: string,
  currentSelection: number,
  buttons: Array<string>,
  dispatch: (action: any) => void,
  navigate: (path: string) => void,
  numberValue: string = "",
  checkBoxState: boolean = false
) => {
  switch (key) {
    case "ArrowLeft":
      if (currentSelection > 0) {
        dispatch(setCurrentSelection(currentSelection - 1));
      }
      break;
    case "ArrowRight":
      if (currentSelection < buttons.length - 1) {
        dispatch(setCurrentSelection(currentSelection + 1));
      }
      break;
    case "Enter":
      if (buttons[currentSelection] == "OkPromoPage") {
        navigate("/number-input");
      } else if (buttons[currentSelection] == "Exit") {
        navigate("/");
      } else if (
        parseInt(buttons[currentSelection]) >= 1 &&
        parseInt(buttons[currentSelection])
      ) {
        dispatch(setNumberValue(buttons[currentSelection]));
      } else if (buttons[currentSelection] === "0") {
        dispatch(setNumberValue("0"));
      } else if (buttons[currentSelection] === "NubmerInputClear") {
        dispatch(delLastNumberValue());
      } else if (buttons[currentSelection] === "NubmerInputCheckBox") {
        dispatch(setReturnCheckBox());
      } else if (buttons[currentSelection] === "OkNubmerInputPage") {
        validateNumber(numberValue, navigate, checkBoxState, dispatch);
      }
      break;
    case "ArrowUp":
      if (currentSelection >= 10 && currentSelection <= 12) {
        dispatch(setCurrentSelection(currentSelection - 2));
      } else if (currentSelection >= 13) {
        dispatch(setCurrentSelection(currentSelection - 1));
      } else if (currentSelection === 0) {
        dispatch(setCurrentSelection(1));
      } else if (currentSelection > 3) {
        dispatch(setCurrentSelection(currentSelection - 3));
      }
      break;
    case "ArrowDown":
      if (
        currentSelection > 0 &&
        currentSelection < 8 &&
        buttons.length !== 1
      ) {
        dispatch(setCurrentSelection(currentSelection + 3));
      } else if (currentSelection >= 8 && currentSelection <= 10) {
        dispatch(setCurrentSelection(currentSelection + 2));
      } else if (currentSelection >= 11) {
        dispatch(setCurrentSelection(currentSelection + 1));
      } else if (currentSelection === 0) {
        dispatch(setCurrentSelection(1));
      }
      break;
    case "Escape":
      navigate("/");
      break;
    case "Backspace":
    case "Delete":
      dispatch(delLastNumberValue());
      break;
    default:
      if (buttons.includes(key)) {
        dispatch(setNumberValue(key));
      }
  }
};
