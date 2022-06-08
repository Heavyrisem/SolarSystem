import React, { useMemo } from "react";
import "../style/Planet.css";

interface PlanetP {
  children?: any;
  img: string;
  size: number;
  shadow?: boolean;
  orbitalCycleDay: number;
  origin?: boolean;
}
const Planet: React.FC<PlanetP> = ({ children, img, size }) => {
  const rootStyle = useMemo(
    () => ({
      width: `${size}rem`,
    }),
    [size]
  );

  const imgStyle = useMemo(
    () => ({
      width: `${size}rem`,
      height: `${size}rem`,
    }),
    [size]
  );

  return (
    <div className="Planet" style={rootStyle}>
      <img src={img} style={imgStyle} />
      {/* {props.shadow&&
                <img className="Planet Shadow" src={Shadow} style={{width: props.size+'rem', transform: 'translate(-50%)'}} />
            } */}
      {children}
    </div>
  );
};

export default Planet;
