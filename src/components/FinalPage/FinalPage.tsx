import { useDispatch, useSelector } from "react-redux";
import ExitButton from "../EscapeButton/ExitButton";
import "./FinalPage.scss";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { handleKeyPress } from "../../Helpers/keyboardHelpers";
import { useEffect } from "react";

function FinalPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSelection = useSelector(
    (state: RootState) => state.promoReducer.currentSelection
  );
  const buttons = ["null", "Exit"];
  const onHandleKeyPress = (event: KeyboardEvent) => {
    handleKeyPress(event.key, currentSelection, buttons, dispatch, navigate);
  };

  useEffect(() => {
    document.addEventListener("keydown", onHandleKeyPress);

    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, [currentSelection]);

  return (
    <>
      <div className="number-input-page-container">
        <ExitButton selectionNumber={buttons.length - 1} />
        <div className="final-page">
          <div className="final-page-container">
            <div className="final-page-container-text-big">ЗАЯВКА ПРИНЯТА</div>
            <div className="final-page-container-text">
              Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalPage;
