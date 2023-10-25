import { useDispatch } from "react-redux";
import { setCurrentSelection } from "../../../../store/reducers/promoReducer";

interface NumButtonProps {
  number: number | string;
  index: number;
  currentSelection: number;
  onClick: (number: number | string) => void;
}

function NumButton({
  number,
  index,
  currentSelection,
  onClick,
}: NumButtonProps) {
  const dispatch = useDispatch();
  const isSelected = currentSelection === index + 1;
  const classNames = `number-input-page-panel-numframe-button ${
    isSelected ? "number-input-page-panel-numframe-selected-button" : ""
  } ${index + 1 == 10 ? "number-input-page-panel-numframe-button-clear" : ""}`;

  return (
    <div
      className={classNames}
      onMouseEnter={() => dispatch(setCurrentSelection(index + 1))}
      onClick={() => onClick(number)}
    >
      <div className="number-input-page-panel-numframe-button-number">
        {number}
      </div>
    </div>
  );
}

export default NumButton;
