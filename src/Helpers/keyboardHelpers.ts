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
  buttons: number,
  dispatch: (action: any) => void,
  navigate: (path: string) => void,
  numberValue: string = "",
  checkBoxState: boolean = false
) => {
  const numberKeys = "0123456789";

  switch (key) {
    case "ArrowLeft":
      if (currentSelection > 1) {
        dispatch(setCurrentSelection(currentSelection - 1));
      } else if (currentSelection === 0) {
        dispatch(setCurrentSelection(1));
      }
      break;
    case "ArrowRight":
      if (currentSelection < buttons) {
        dispatch(setCurrentSelection(currentSelection + 1));
      }
      break;
    case "Enter":
      if (buttons === 1 && currentSelection === 14) {
        navigate("/");
      } else if (buttons === 1) {
        navigate("/number-input");
      } else if (currentSelection === 14) {
        navigate("/");
      } else if (currentSelection >= 1 && currentSelection <= 9) {
        dispatch(setNumberValue(numberKeys[currentSelection - 1]));
      } else if (currentSelection === 11) {
        dispatch(setNumberValue("0"));
      } else if (currentSelection === 10) {
        dispatch(delLastNumberValue());
      } else if (currentSelection === 12) {
        dispatch(setReturnCheckBox());
      } else if (currentSelection === 13) {
        validateNumber(numberValue, navigate, checkBoxState, dispatch);
      }
      break;
    case "ArrowUp":
      if (currentSelection > 3) {
        dispatch(setCurrentSelection(currentSelection - 3));
      } else if (currentSelection >= 10 && currentSelection <= 12) {
        dispatch(setCurrentSelection(currentSelection - 2));
      } else if (currentSelection >= 13) {
        dispatch(setCurrentSelection(currentSelection - 1));
      } else if (currentSelection === 0) {
        dispatch(setCurrentSelection(1));
      }
      break;
    case "ArrowDown":
      if (currentSelection > 0 && currentSelection < 8 && buttons !== 1) {
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
      if (numberKeys.includes(key)) {
        dispatch(setNumberValue(key));
      }
  }
};
