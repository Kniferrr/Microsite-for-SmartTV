import { setCurrentSelection } from "../store/reducers/promoPageReducer";

export const handleKeyPress = (
  key: string,
  currentSelection: number,
  buttons: number,
  dispatch: (action: any) => void,
  navigate: (path: string) => void
) => {
  if (key === "ArrowLeft" && currentSelection > 1) {
    dispatch(setCurrentSelection(currentSelection - 1));
  } else if (currentSelection == 0) {
    dispatch(setCurrentSelection(1));
  } else if (key === "ArrowRight" && currentSelection < buttons) {
    dispatch(setCurrentSelection(currentSelection + 1));
  } else if (key === "Enter") {
    if (buttons === 1) {
      navigate("/number-input");
    } else if (currentSelection == 14) {
      navigate("/");
    } else if (currentSelection == 0) {
      dispatch(setCurrentSelection(1));
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
  }
};
