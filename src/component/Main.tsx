import React, { useState } from 'react';
import Orbit from './Orbit';

import SolarSvg from '../img/Solar.svg';
import MercurySvg from '../img/Mercury.svg';
import VenusSvg from '../img/Venus.svg';

function Main() {
	const [SpaceTime, setSpaceTime] = useState<number>(100000);

	return (
		<>
			<Solar size={4}>
				<Orbit radius={10} size={0.383*2} img={MercurySvg} orbitalCycleDay={88 / SpaceTime} />
				<Orbit radius={15} size={0.950*2} img={VenusSvg} orbitalCycleDay={225 / SpaceTime} />
			</Solar>
		</>
	)
}

interface SolarP {
	children?: any,
	size: number
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
		<div>
			<img src={SolarSvg} style={Style} />
			{props.children}
		</div>
	)
}

export default Main;