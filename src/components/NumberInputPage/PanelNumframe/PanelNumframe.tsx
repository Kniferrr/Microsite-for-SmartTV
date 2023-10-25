import { useDispatch, useSelector } from "react-redux";
import "./PanelNumframe.scss";
import { RootState } from "../../../store/store";
import {
  delLastNumberValue,
  setNumberValue,
} from "../../../store/reducers/promoReducer";
import NumButton from "./NumButton/NumButton";

function PanelNumframe() {
  const dispatch = useDispatch();
  const currentSelection = useSelector(
    (state: RootState) => state.promoReducer.currentSelection
  );

  const numbers: (number | string)[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "Стереть",
    0,
  ];

  const handleButtonClick = (number: number | string) => {
    if (number === "Стереть") {
      dispatch(delLastNumberValue());
    } else {
      dispatch(setNumberValue(`${number}`));
    }
  };

  return (
    <>
      {numbers.map((number, index) => (
        <NumButton
          key={index}
          number={number}
          index={index}
          currentSelection={currentSelection}
          onClick={handleButtonClick}
        />
      ))}
    </>
  );
}

export default PanelNumframe;
