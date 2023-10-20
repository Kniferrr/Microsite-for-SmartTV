import "./PromoBanner.scss";

function PromoBanner() {
  return (
    <>
      <div className="container-promo-banner">
        <div className="promo-banner">
          <div className="promo-banner-text">
            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
          </div>
          <div className="promo-banner-qrcode"></div>
          <div className="promo-banner-text">
            Сканируйте QR-код или нажмите ОК
          </div>
          <button className="promo-banner-button">OK</button>
        </div>
      </div>
    </>
  );
}

export default PromoBanner;
