import React from "react";
import useRotationAnim from "../hooks/useRotateAnim";
import "../style/Orbit.css";
import Planet from "./Planet";

interface OrbitProps {
  children?: any;
  radius: number;
  size: number;
  img: string;
  orbitalCycleDay: number;
  origin?: boolean;
  startRotation?: number;
}

const Orbit: React.FC<OrbitProps> = ({
  children,
  radius,
  size,
  img,
  orbitalCycleDay,
  origin,
  startRotation,
}) => {
  const { style } = useRotationAnim({
    orbitalCycleDay,
    style: {
      width: radius + "rem",
      height: radius + "rem",
      transform: "translate(-50%, -50%)",
    },
  });

  return (
    <div className="Orbit" style={style}>
      <Planet
        img={img}
        size={size}
        orbitalCycleDay={orbitalCycleDay}
        origin={origin}
      >
        {children}
      </Planet>
    </div>
  );
};

export default Orbit;
