import { useDispatch, useSelector } from "react-redux";
import ExitButton from "../EscapeButton/ExitButton";
import "./NotFoundPage.scss";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { handleKeyPress } from "../../Helpers/keyboardHelpers";
import { useEffect } from "react";

const NotFoundPage = () => {
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
      <ExitButton selectionNumber={1} />
      <div className="notFoundPage">
        <div className="notFoundPageContainer">
          <div className="notFoundPagePanel">
            <p className="notFoundPagePanelText">
              Извините, запрашиваемая страница не найдена.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
