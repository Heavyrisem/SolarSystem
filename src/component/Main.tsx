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

function Main() {
  const [SpaceTime, setSpaceTime] = useState<number>(10000);
  const [Scale, setScale] = useState<number>(0.6);

  return (
    <>
      <Config
        SpaceTime={SpaceTime}
        setSpaceTime={setSpaceTime}
        Scale={Scale}
        setScale={setScale}
      />
      <Starfield />
      <Solar size={4 * Scale}>
        <Orbit
          radius={8 * Scale}
          size={0.95 * Scale}
          img={MercurySvg}
          orbitalCycleDay={88 / SpaceTime}
        />
        <Orbit
          radius={15 * Scale}
          size={0.95 * 1.5 * Scale}
          img={VenusSvg}
          orbitalCycleDay={225 / SpaceTime}
        />
        <Orbit
          radius={23 * Scale}
          size={0.95 * 1.6 * Scale}
          img={EarthSvg}
          orbitalCycleDay={365 / SpaceTime}
        >
          <Orbit
            radius={5 * Scale}
            size={0.95 * Scale}
            img={MoonSvg}
            orbitalCycleDay={27 / SpaceTime}
            origin={true}
          />
        </Orbit>
        <Orbit
          radius={38 * Scale}
          size={0.95 * 3.2 * Scale}
          img={MarsSvg}
          orbitalCycleDay={687 / SpaceTime}
        />
        <Asteroidbelt
          radius={55 * Scale}
          size={10 * Scale}
          orbitalCycleDay={4343.5 / SpaceTime}
        />
        <Orbit
          radius={60 * Scale}
          size={0.95 * 5 * Scale}
          img={JupiterSvg}
          orbitalCycleDay={4380 / SpaceTime}
        />
        <Orbit
          radius={70 * Scale}
          size={0.95 * 3 * Scale}
          img={SaturnSvg}
          orbitalCycleDay={10585 / SpaceTime}
        />
        <Orbit
          radius={80 * Scale}
          size={0.95 * 4 * Scale}
          img={UranusSvg}
          orbitalCycleDay={30660 / SpaceTime}
        />
        <Orbit
          radius={90 * Scale}
          size={0.95 * 3.5 * Scale}
          img={NpetuneSvg}
          orbitalCycleDay={60225 / SpaceTime}
        />
      </Solar>
    </>
  );
}

export default Main;
