import { useEffect } from "react";
import "./PromoBanner.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setCurrentSelection } from "../../store/reducers/promoPageReducer";
import { handleKeyPress } from "../../Helpers/keyboardHelpers";

function PromoBanner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSelection = useSelector(
    (state: RootState) => state.promoPageReducer.currentSelection
  );
  const buttons = 1;
  useEffect(() => {
    document.addEventListener("keydown", onHandleKeyPress);

    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, [currentSelection]);

  if (currentSelection > buttons) {
    dispatch(setCurrentSelection(0));
  }
  const onHandleKeyPress = (event: KeyboardEvent) => {
    handleKeyPress(event.key, currentSelection, buttons, dispatch, navigate);
  };

  return (
    <>
      <div className="promo-banner">
        <div className="promo-banner-text">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <div className="promo-banner-qrcode">
          <img src="img/qr-code.png" />
        </div>
        <div className="promo-banner-text">
          Сканируйте QR-код или нажмите ОК
        </div>
        <a href={`#/number-input`}>
          <button
            className={"promo-banner-button"}
            key={1}
            onMouseEnter={() => dispatch(setCurrentSelection(1))}
          >
            OK
          </button>
        </a>
      </div>
    </>
  );
}

export default PromoBanner;
