import React, { LegacyRef, MutableRefObject, useRef, useState } from 'react';
import Orbit from './Orbit';

import SolarSvg from '../img/Solar.svg';
import MercurySvg from '../img/Mercury.svg';
import VenusSvg from '../img/Venus.svg';
import EarthSvg from '../img/Earth.svg';
import MoonSvg from '../img/Moon.svg';
import MarsSvg from '../img/Mars.svg';
import JupiterSvg from '../img/Jupiter.svg';
import Starfield from './Starfield';

function Main() {
	const [SpaceTime, setSpaceTime] = useState<number>(100);
	const SolarRef = useRef<HTMLImageElement>(null);
	return (
		<>
			<Starfield />
			<Solar size={4} refs={SolarRef}>
				<Orbit radius={10} size={0.950} img={MercurySvg} orbitalCycleDay={11 / SpaceTime} />
				<Orbit radius={17} size={0.950*1.5} img={VenusSvg} orbitalCycleDay={12 / SpaceTime} />
				<Orbit radius={25} size={0.950*1.6} img={EarthSvg} orbitalCycleDay={13 / SpaceTime}>
					<Orbit radius={5} size={0.950} img={MoonSvg} orbitalCycleDay={11 / SpaceTime} origin={SolarRef} />
				</Orbit>
				<Orbit radius={45} size={0.950*3.2} img={MarsSvg} orbitalCycleDay={15 / SpaceTime} />
				<Orbit radius={60} size={0.950*5} img={JupiterSvg} orbitalCycleDay={25 / SpaceTime} />
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