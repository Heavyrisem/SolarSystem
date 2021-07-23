import React, { useState } from 'react';
import '../style/Orbit.css';
import Planet from './Planet';

interface props {
    children?: Element,
    radius: number,
    size: number,
    img: string,
    orbitalCycleDay: number
}
function Orbit(props: props) {
    const [Rotation, setRotation] = useState<number>(0);

    const Style: React.CSSProperties = {
        width: props.radius+'rem',
        height: props.radius+'rem',
        transform: ['translate(-50%, -50%)', `rotate(${Rotation}deg)`].join(' '),
        animation: `OrbitRotate infinite ${props.orbitalCycleDay * 86400}s linear`
    }

    return (
        <div className="Orbit" style={Style}>
            <Planet img={props.img} size={props.size} />
            {props.children}
        </div>
    )
}

export default Orbit;