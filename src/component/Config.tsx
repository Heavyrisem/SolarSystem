import React from "react";
import "../style/Config.css";

import FPS from "./FPS";

interface ConfigProps {
  SpaceTime: number;
  setSpaceTime: React.Dispatch<React.SetStateAction<number>>;
  Scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
}
const Config: React.FC<ConfigProps> = ({
  SpaceTime,
  setSpaceTime,
  Scale,
  setScale,
}) => {
  return (
    <div className="Config">
      <span>Config</span>
      <div>
        <span>Time</span>{" "}
        <input
          type="number"
          defaultValue={SpaceTime}
          onChange={(e) => {
            setSpaceTime(Number(e.target.value) | 1);
          }}
        />
      </div>
      <div>
        <span>Scale</span>{" "}
        <input
          type="number"
          defaultValue={Scale}
          onChange={(e) => {
            setScale(Number(e.target.value));
          }}
        />
      </div>
      <div style={{ textAlign: "left" }}>
        <span>FPS: </span> <FPS />
      </div>
    </div>
  );
};

export default Config;
