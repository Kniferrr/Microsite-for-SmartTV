import {
  delLastNumberValue,
  setCurrentSelection,
  setNumberValue,
  setReturnCheckBox,
} from "../store/reducers/promoReducer";
import { validateNumber } from "./FormatNumberHelpers";

type MyAction = {
  type: string;
  payload: string | number | void;
};

export const handleKeyPress = (
  key: string,
  currentSelection: number,
  buttons: Array<string>,
  dispatch: (action: MyAction) => void,
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
      handleEnter(
        currentSelection,
        buttons,
        navigate,
        dispatch,
        numberValue,
        checkBoxState
      );
      break;
    case "ArrowUp":
      dispatch(setCurrentSelection(handleArrowUp(currentSelection)));
      break;
    case "ArrowDown":
      dispatch(setCurrentSelection(handleArrowDown(currentSelection, buttons)));
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

function handleArrowUp(currentSelection: number): number {
  if (currentSelection >= 13) {
    return currentSelection - 1;
  } else if (currentSelection >= 10) {
    return currentSelection - 2;
  } else if (currentSelection > 3) {
    return currentSelection - 3;
  } else if (currentSelection === 0) {
    return 1;
  }
  return currentSelection;
}

function handleArrowDown(currentSelection: number, buttons: string[]): number {
  if (currentSelection >= 11) {
    return currentSelection + 1;
  } else if (currentSelection >= 8) {
    return currentSelection + 2;
  } else if (
    currentSelection > 0 &&
    currentSelection < 8 &&
    buttons.length !== 1
  ) {
    return currentSelection + 3;
  } else if (currentSelection === 0) {
    return 1;
  }
  return currentSelection;
}

function handleEnter(
  currentSelection: number,
  buttons: Array<string>,
  navigate: (path: string) => void,
  dispatch: (action: MyAction) => void,
  numberValue: string = "",
  checkBoxState: boolean = false
) {
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
}
