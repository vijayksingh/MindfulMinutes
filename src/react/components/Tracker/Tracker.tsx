// Tracker.tsx
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./Tracker.css";

interface TrackerProps {
  siteCategory: string;
  siteName: string;
}

const Tracker: React.FC<TrackerProps> = ({ siteCategory, siteName }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Draggable>
      <div
        className="tracker"
        data-category={siteCategory}
        data-site={siteName}
      >
        <div className="tracker-header">
          <span className="tracker-site">{siteName}</span>
          <span className="tracker-category">{siteCategory}</span>
        </div>
        <div className="tracker-time">{formatTime(time)}</div>
      </div>
    </Draggable>
  );
};

export default Tracker;
