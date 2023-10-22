import "./PromoPage.scss";
import PromoBanner from "./PromoBanner";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SetShowComponentPromoBanner } from "../../store/reducers/promoReducer";

function PromoPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();
  const showComponentPromoBanner = useSelector(
    (state: RootState) => state.promoReducer.showComponentPromoBanner
  );
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const savedTime = localStorage.getItem("videoCurrentTime");
    if (savedTime !== null) {
      setCurrentTime(parseFloat(savedTime));
    }

    const timer = setTimeout(() => {
      dispatch(SetShowComponentPromoBanner(true));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlePlay = () => {
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
        {showComponentPromoBanner && <PromoBanner />}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          onPlay={handlePlay}
          onTimeUpdate={handleTimeUpdate}
        >
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
