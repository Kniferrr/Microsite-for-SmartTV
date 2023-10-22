import { useDispatch, useSelector } from "react-redux";
import "./PanelNumframe.scss";
import { RootState } from "../../../store/store";
import {
  delLastNumberValue,
  setCurrentSelection,
  setNumberValue,
} from "../../../store/reducers/promoReducer";

function PanelNumframe() {
  const dispatch = useDispatch();
  const currentSelection = useSelector(
    (state: RootState) => state.promoReducer.currentSelection
  );

  return (
    <>
      <div className="number-input-page-panel-numframe-container">
        <div className="number-input-page-panel-numframe-container-row">
          <div
            key={1}
            className={
              currentSelection === 1
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(1))}
            onClick={() => dispatch(setNumberValue("1"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              1
            </div>
          </div>
          <div
            key={2}
            className={
              currentSelection === 2
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(2))}
            onClick={() => dispatch(setNumberValue("2"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              2
            </div>
          </div>
          <div
            key={3}
            className={
              currentSelection === 3
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(3))}
            onClick={() => dispatch(setNumberValue("3"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              3
            </div>
          </div>
        </div>
        <div className="number-input-page-panel-numframe-container-row">
          <div
            key={4}
            className={
              currentSelection === 4
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(4))}
            onClick={() => dispatch(setNumberValue("4"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              4
            </div>
          </div>
          <div
            key={5}
            className={
              currentSelection === 5
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(5))}
            onClick={() => dispatch(setNumberValue("5"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              5
            </div>
          </div>
          <div
            key={6}
            className={
              currentSelection === 6
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(6))}
            onClick={() => dispatch(setNumberValue("6"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              6
            </div>
          </div>
        </div>
        <div className="number-input-page-panel-numframe-container-row">
          <div
            key={7}
            className={
              currentSelection === 7
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(7))}
            onClick={() => dispatch(setNumberValue("7"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              7
            </div>
          </div>
          <div
            key={8}
            className={
              currentSelection === 8
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(8))}
            onClick={() => dispatch(setNumberValue("8"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              8
            </div>
          </div>
          <div
            key={9}
            className={
              currentSelection === 9
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(9))}
            onClick={() => dispatch(setNumberValue("9"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              9
            </div>
          </div>
        </div>
        <div className="number-input-page-panel-numframe-container-row">
          <div
            key={"NubmerInputClear"}
            className={
              currentSelection === 10
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button-clear number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button-clear number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(10))}
            onClick={() => dispatch(delLastNumberValue())}
          >
            <div className="number-input-page-panel-numframe-button-number">
              Стереть
            </div>
          </div>
          <div
            key={11}
            className={
              currentSelection === 11
                ? "number-input-page-panel-numframe-selected-button number-input-page-panel-numframe-button"
                : "number-input-page-panel-numframe-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(11))}
            onClick={() => dispatch(setNumberValue("0"))}
          >
            <div className="number-input-page-panel-numframe-button-number">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PanelNumframe;
