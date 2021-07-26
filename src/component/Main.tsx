import React, { LegacyRef, MutableRefObject, useRef, useState } from 'react';
import Orbit from './Orbit';
import Starfield from './Starfield';
import Asteroidbelt from './Asteroidbelt';

import SolarSvg from '../img/Solar.svg';
import MercurySvg from '../img/MercuryShadow.svg';
import VenusSvg from '../img/VenusShadow.svg';
import EarthSvg from '../img/EarthShadow.svg';
import MoonSvg from '../img/MoonShadow.svg';
import MarsSvg from '../img/MarsShadow.svg';
import JupiterSvg from '../img/JupiterShadow.svg';
import SaturnSvg from '../img/SaturnShadow.svg';
import UranusSvg from '../img/UranusShadow.svg';
import NpetuneSvg from '../img/NeptuneShadow.svg';
import Config from './Config';

function Main() {
	const [SpaceTime, setSpaceTime] = useState<number>(10000);
	const [Scale, setScale] = useState<number>(0.6);
	const SolarRef = useRef<HTMLImageElement>(null);
	return (
		<>
			<Config SpaceTime={SpaceTime} setSpaceTime={setSpaceTime} Scale={Scale} setScale={setScale}/>
			<Starfield />
			<Solar size={4 * Scale} refs={SolarRef}>
				{/* <Orbit radius={15 * Scale} size={0.950 * Scale} img={MercurySvg} orbitalCycleDay={5 / SpaceTime}>
					<Orbit radius={5 * Scale} size={0.950 * Scale} img={MoonSvg} orbitalCycleDay={27 / SpaceTime} origin={SolarRef} />
				</Orbit> */}
				<Orbit radius={8 * Scale} size={0.950 * Scale} img={MercurySvg} orbitalCycleDay={88 / SpaceTime} />
				<Orbit radius={15 * Scale} size={0.950*1.5 * Scale} img={VenusSvg} orbitalCycleDay={225 / SpaceTime} />
				<Orbit radius={23 * Scale} size={0.950*1.6 * Scale} img={EarthSvg} orbitalCycleDay={365 / SpaceTime}>
					<Orbit radius={5 * Scale} size={0.950 * Scale} img={MoonSvg} orbitalCycleDay={27 / SpaceTime} origin={true} />
				</Orbit>
				<Orbit radius={38 * Scale} size={0.950*3.2 * Scale} img={MarsSvg} orbitalCycleDay={687 / SpaceTime} />
				<Asteroidbelt radius={55 * Scale} size={10 * Scale} orbitalCycleDay={4343.5 / SpaceTime} />
				<Orbit radius={60 * Scale} size={0.950*5 * Scale} img={JupiterSvg} orbitalCycleDay={4380 / SpaceTime} />
				<Orbit radius={70 * Scale} size={0.950*3 * Scale} img={SaturnSvg} orbitalCycleDay={10585 / SpaceTime} />
				<Orbit radius={80 * Scale} size={0.950*4 * Scale} img={UranusSvg} orbitalCycleDay={30660 / SpaceTime} />
				<Orbit radius={90 * Scale} size={0.950*3.5 * Scale} img={NpetuneSvg} orbitalCycleDay={60225 / SpaceTime} />
			</Solar>
		</>
	)
}

interface SolarP {
	children?: any,
	size: number,
    refs: LegacyRef<HTMLImageElement>
}
function Solar(props: SolarP) {
	const Style: React.CSSProperties = {
		width: props.size+'rem',
		height: props.size+'rem',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		verticalAlign: 'middle',
		textAlign: 'center',
		margin: 'auto',
		filter: 'drop-shadow(0 0 20px #f3ad0d)'
	};
	return (
		<div style={{width: '100%'}}>
			<img src={SolarSvg} style={Style} ref={props.refs} />
			{props.children}
		</div>
	)
}

export default Main;