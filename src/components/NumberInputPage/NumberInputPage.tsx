import ExitButton from "../EscapeButton/ExitButton";
import PanelNumframe from "./PanelNumframe/PanelNumframe";
import "./NumberInputPage.scss";
import {
  setCurrentSelection,
  setReturnCheckBox,
} from "../../store/reducers/promoReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { handleKeyPress } from "../../Helpers/keyboardHelpers";
import { useEffect } from "react";
import {
  formatPhoneNumber,
  validateNumber,
} from "../../Helpers/FormatNumberHelpers";
import TimerComponent from "../TimerComponent/TimerComponent";

function NumberInputPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { numberValue, currentSelection, checkBoxState, errorMessage } =
    useSelector((state: RootState) => state.promoReducer);

  const buttons = [
    "null",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "NubmerInputClear",
    "0",
    "NubmerInputCheckBox",
    "OkNubmerInputPage",
    "Exit",
  ];

  const validateNumberValue = formatPhoneNumber(numberValue);

  useEffect(() => {
    document.addEventListener("keydown", onHandleKeyPress);

    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, [currentSelection]);

  const onHandleKeyPress = (event: KeyboardEvent) => {
    handleKeyPress(
      event.key,
      currentSelection,
      buttons,
      dispatch,
      navigate,
      numberValue,
      checkBoxState
    );
  };

  return (
    <>
      <div className="number-input-page">
        <ExitButton selectionNumber={buttons.length - 1} />
        <TimerComponent />
        <div className="number-input-page-container">
          <div className="number-input-page-panel">
            <div className="number-input-page-panel-text">
              Введите ваш номер мобильного телефона
            </div>
            <div className="number-input-page-panel-tnumber number-input-page-panel-text">
              +7({validateNumberValue}
            </div>
            <div className="number-input-page-panel-text">
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className="number-input-page-panel-numframe">
              <PanelNumframe />
            </div>
            <div>
              <label
                key={"NubmerInputCheckBox"}
                onMouseEnter={() => dispatch(setCurrentSelection(12))}
                className={
                  currentSelection === 12
                    ? "number-input-page-panel-numframe-selected-label number-input-page-panel-checkbox-label"
                    : "number-input-page-panel-checkbox-label"
                }
              >
                <input
                  className="number-input-page-panel-checkbox"
                  type="checkbox"
                  checked={checkBoxState}
                  onChange={() => dispatch(setReturnCheckBox())}
                />
                <div className="number-input-page-panel-checkbox-text number-input-page-panel-text">
                  Согласие на обработку персональных данных
                </div>
              </label>
            </div>
            <div
              className={
                numberValue.length == 10 && checkBoxState
                  ? "number-input-page-panel-numframe-selected-button number-input-page-panel-button"
                  : "number-input-page-panel-numframe-selected-button number-input-page-panel-button disabled-button"
              }
            >
              <button
                key={"OkNubmerInputPage"}
                className={
                  currentSelection === 13
                    ? "number-input-page-panel-numframe-selected-button number-input-page-panel-button"
                    : "number-input-page-panel-button"
                }
                onMouseEnter={() => dispatch(setCurrentSelection(13))}
                onClick={() =>
                  validateNumber(numberValue, navigate, checkBoxState, dispatch)
                }
              >
                <div className="number-input-page-panel-button-text number-input-page-panel-text">
                  Подтвердить номер
                </div>
              </button>
            </div>
            <div className="number-input-page-panel-text number-input-page-panel-text-error">
              {errorMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NumberInputPage;
