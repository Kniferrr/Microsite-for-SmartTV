import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TimerComponent.scss";

const TimerComponent: React.FC = () => {
  const [time, setTime] = useState(10);
  const [mouseMoving, setMouseMoving] = useState(false);
  const navigate = useNavigate();
  const timeToTimer = 10;

  const handleMouseMove = () => {
    setMouseMoving(true);
    setTime(timeToTimer);
  };

  useEffect(() => {
    setMouseMoving(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleMouseMove);

    const timerInterval = setInterval(() => {
      if (!mouseMoving) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    if (time === 0) {
      navigate("/");
    }

    return () => {
      clearInterval(timerInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleMouseMove);
    };
  }, [time, mouseMoving, history]);

  return (
    <div className="timer-container">
      <div className="timer">
        <h1>{time}</h1>
      </div>
      {time === 0 && (
        <p className={"redirect-message"}>
          Перенаправление на главную страницу...
        </p>
      )}
    </div>
  );
};

export default TimerComponent;
