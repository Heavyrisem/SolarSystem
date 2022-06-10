import React, { useState } from "react";
import Orbit from "./Orbit";
import Starfield from "./Starfield";
import Asteroidbelt from "./Asteroidbelt";

import MercurySvg from "../img/MercuryShadow.svg";
import VenusSvg from "../img/VenusShadow.svg";
import EarthSvg from "../img/EarthShadow.svg";
import MoonSvg from "../img/MoonShadow.svg";
import MarsSvg from "../img/MarsShadow.svg";
import JupiterSvg from "../img/JupiterShadow.svg";
import SaturnSvg from "../img/SaturnShadow.svg";
import UranusSvg from "../img/UranusShadow.svg";
import NpetuneSvg from "../img/NeptuneShadow.svg";
import Config from "./Config";
import Solar from "./Solar";

const Main: React.FC = () => {
  const [spaceTime, setSpaceTime] = useState<number>(10000);
  const [scale, setScale] = useState<number>(0.6);

  return (
    <>
      <Config
        SpaceTime={spaceTime}
        setSpaceTime={setSpaceTime}
        Scale={scale}
        setScale={setScale}
      />
      <Starfield />
      <Solar size={4 * scale}>
        <Orbit
          radius={8 * scale}
          size={0.95 * scale}
          img={MercurySvg}
          orbitalCycleDay={88 / spaceTime}
        />
        <Orbit
          radius={15 * scale}
          size={0.95 * 1.5 * scale}
          img={VenusSvg}
          orbitalCycleDay={225 / spaceTime}
        />
        <Orbit
          radius={23 * scale}
          size={0.95 * 1.6 * scale}
          img={EarthSvg}
          orbitalCycleDay={365 / spaceTime}
        >
          <Orbit
            radius={5 * scale}
            size={0.95 * scale}
            img={MoonSvg}
            orbitalCycleDay={27 / spaceTime}
            origin={true}
          />
        </Orbit>
        <Orbit
          radius={38 * scale}
          size={0.95 * 3.2 * scale}
          img={MarsSvg}
          orbitalCycleDay={687 / spaceTime}
        />
        <Asteroidbelt
          radius={55 * scale}
          size={10 * scale}
          orbitalCycleDay={4343.5 / spaceTime}
        />
        <Orbit
          radius={60 * scale}
          size={0.95 * 5 * scale}
          img={JupiterSvg}
          orbitalCycleDay={4380 / spaceTime}
        />
        <Orbit
          radius={70 * scale}
          size={0.95 * 3 * scale}
          img={SaturnSvg}
          orbitalCycleDay={10585 / spaceTime}
        />
        <Orbit
          radius={80 * scale}
          size={0.95 * 4 * scale}
          img={UranusSvg}
          orbitalCycleDay={30660 / spaceTime}
        />
        <Orbit
          radius={90 * scale}
          size={0.95 * 3.5 * scale}
          img={NpetuneSvg}
          orbitalCycleDay={60225 / spaceTime}
        />
      </Solar>
    </>
  );
};

export default Main;
