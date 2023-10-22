import { useEffect } from "react";
import "./PromoBanner.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setCurrentSelection } from "../../store/reducers/promoReducer";
import { handleKeyPress } from "../../Helpers/keyboardHelpers";

function PromoBanner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentSelection = useSelector(
    (state: RootState) => state.promoReducer.currentSelection
  );
  const buttons = ["null", "OkPromoPage"];
  useEffect(() => {
    document.addEventListener("keydown", onHandleKeyPress);

    return () => {
      document.removeEventListener("keydown", onHandleKeyPress);
    };
  }, [currentSelection]);

  if (currentSelection > buttons.length) {
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
          <img src="public/img/qr-code.png" />
        </div>
        <div className="promo-banner-text">
          Сканируйте QR-код или нажмите ОК
        </div>
        <a href={`#/number-input`}>
          <button
            key={"OkPromoPage"}
            onMouseEnter={() => dispatch(setCurrentSelection(1))}
            className={
              currentSelection === 1
                ? "promo-banner-selected-button promo-banner-button"
                : "promo-banner-button"
            }
          >
            OK
          </button>
        </a>
      </div>
    </>
  );
}

export default PromoBanner;
