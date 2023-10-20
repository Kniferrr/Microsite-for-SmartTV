import "./PromoPage.scss";
import PromoBanner from "./PromoBanner";
import { useEffect, useState } from "react";
function PromoPage() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <div className="video-container">
        {showComponent && <PromoBanner />}
        <video autoPlay loop muted onPlay={() => setShowComponent(false)}>
          <source
            src="videos/Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    </>
  );
}

export default PromoPage;
