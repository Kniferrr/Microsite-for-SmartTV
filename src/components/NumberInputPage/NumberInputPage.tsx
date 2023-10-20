import "./NumberInputPage.scss";

function NumberInputPage() {
  return (
    <>
      <div className="number-input-page-container">
        <div className="number-input-page-panel">
          <div className="number-input-page-panel-text">
            Введите ваш номер мобильного телефона
          </div>
          <div className="number-input-page-panel-tnumber number-input-page-panel-text">
            +7(___)___-__-__
          </div>
          <div className="number-input-page-panel-text">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </div>
          <div className="number-input-page-panel-numframe"></div>
          <div>
            <label className="number-input-page-panel-checkbox-label">
              <input
                type="checkbox"
                className="number-input-page-panel-checkbox"
              />
              <div className="number-input-page-panel-checkbox-text number-input-page-panel-text">
                Согласие на обработку персональных данных
              </div>
            </label>
          </div>
          <button className="number-input-page-panel-button">
            <div className="number-input-page-panel-button-text number-input-page-panel-text">
              Подтвердить номер
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default NumberInputPage;
