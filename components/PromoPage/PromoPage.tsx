import "./PromoPage.scss";
import PromoBanner from "./PromoBanner";
function PromoPage() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted>
          <source
            src="videos/Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
        <PromoBanner />
      </div>
    </>
  );
}

export default PromoPage;
