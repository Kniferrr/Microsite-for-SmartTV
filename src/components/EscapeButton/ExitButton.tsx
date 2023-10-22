import { useDispatch, useSelector } from "react-redux";
import "./ExitButton.scss";
import { RootState } from "../../store/store";
import { setCurrentSelection } from "../../store/reducers/promoReducer";

interface ExitButtonProps {
  selectionNumber: number;
}

const ExitButton: React.FC<ExitButtonProps> = ({ selectionNumber }) => {
  const dispatch = useDispatch();
  const currentSelection = useSelector(
    (state: RootState) => state.promoReducer.currentSelection
  );
  return (
    <>
      <div className="exit-button-container">
        <a href={`#/`}>
          <div
            key={"Exit"}
            className={
              currentSelection === selectionNumber
                ? "number-input-page-panel-numframe-selected-button exit-button"
                : "exit-button"
            }
            onMouseEnter={() => dispatch(setCurrentSelection(14))}
          >
            <div className="cross">&#10006;</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ExitButton;
