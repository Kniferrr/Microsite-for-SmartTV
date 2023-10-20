import ExitButton from "../EscapeButton/ExitButton";
import "./FinalPage.scss";

function FinalPage() {
  return (
    <>
      <ExitButton />
      <div className="final-page">
        <div className="final-page-container">
          <div className="final-page-container-text-big">ЗАЯВКА ПРИНЯТА</div>
          <div className="final-page-container-text">
            Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalPage;
