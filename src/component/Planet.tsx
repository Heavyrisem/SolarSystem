import React, { useEffect, useRef } from 'react';
import '../style/Planet.css';

import Shadow from '../img/PlanetShadow.svg';

interface PlanetP {
    children?: any,
    img: string,
    size: number,
    shadow?: boolean,
    orbitalCycleDay: number,
    origin?: React.RefObject<HTMLImageElement>
}
function Planet(props: PlanetP) {
    let Rotation = 0;
    let Speed = 360 / (props.orbitalCycleDay * 86400);
    const PlaRef = useRef<HTMLDivElement>(null);

    function Rotate() {
        if (props.origin?.current && PlaRef.current) {
            Rotation += Speed;
            PlaRef.current.style.transform = ['translate(-50%, -50%)', `rotate(${Rotation}deg)`].join(' ')
        }
        requestAnimationFrame(Rotate);
    }

    useEffect(() => {
        if (props.origin?.current) {
            requestAnimationFrame(Rotate);
        }
    }, []);

    const Style: React.CSSProperties = {
        display: 'inline',
        // transform: ['translate(-50%, -50%)', `rotate(${Rotation}deg)`].join(' '),
        // animation: (!props.children)? `PlanetRotate infinite ${props.orbitalCycleDay * 86400 }s linear`:''
    }
    
    return (
        <div style={Style} className="Planet" ref={PlaRef}>
            <img src={props.img} style={{width: props.size+'rem'}} />
            {!props.shadow&&
                <img className="Planet Shadow" src={Shadow} style={{width: props.size+'rem', transform: 'translate(-50%)'}} />
            }
            {props.children}
        </div>
    )
}

export default Planet;