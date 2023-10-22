import "./PromoPage.scss";
import PromoBanner from "./PromoBanner";
import { useEffect, useState, useRef } from "react";

function PromoPage() {
  const [showComponent, setShowComponent] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const savedTime = localStorage.getItem("videoCurrentTime");
    if (savedTime !== null) {
      setCurrentTime(parseFloat(savedTime));
    }

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlePlay = () => {
    setShowComponent(false);
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      localStorage.setItem(
        "videoCurrentTime",
        videoRef.current.currentTime.toString()
      );
    }
  };

  return (
    <>
      <div className="video-container">
        {showComponent && <PromoBanner />}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          onPlay={handlePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source
            src="public/videos/Volvo Trucks - The Epic Split feat. Van Damme (Live Test).mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    </>
  );
}

export default PromoPage;
