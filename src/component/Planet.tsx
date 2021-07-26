import React, { useEffect, useRef, useState } from 'react';
import '../style/Planet.css';

import Shadow from '../img/PlanetShadow.svg';

interface PlanetP {
    children?: any,
    img: string,
    size: number,
    shadow?: boolean,
    orbitalCycleDay: number,
    origin?: boolean
}
function Planet(props: PlanetP) {
    // const [FrameReq, setFrameReq] = useState<number>(-1);
    let FrameReq = -1;
    let Rotation = 0;
    const PlaRef = useRef<HTMLDivElement>(null);
    
    function Rotate() {
        if (PlaRef.current) {
            let Speed = 360 / (props.orbitalCycleDay * 86400);
            Rotation += Speed;
            PlaRef.current.style.transform = ['translate(-50%, -50%)', `rotate(${Rotation}deg)`].join(' ')
            FrameReq = (requestAnimationFrame(Rotate));
        }
    }

    useEffect(() => {
        if (props.origin) {
            FrameReq = (requestAnimationFrame(Rotate));
            console.log("Update");
            return () => {
                console.log("Cancle", FrameReq);
                cancelAnimationFrame(FrameReq);
            }
        }
    }, [props]);

    const Style: React.CSSProperties = {
        // transform: ['translate(-50%, -50%)', `rotate(${Rotation}deg)`].join(' '),
        // animation: (!props.children)? `PlanetRotate infinite ${props.orbitalCycleDay * 86400 }s linear`:''
    }
    
    return (
        <div className="Planet" ref={PlaRef} style={{width: props.size+'rem'}}>
            <img src={props.img} style={{width: props.size+'rem', height: props.size+'rem'}} />
            {/* {props.shadow&&
                <img className="Planet Shadow" src={Shadow} style={{width: props.size+'rem', transform: 'translate(-50%)'}} />
            } */}
            {props.children}
        </div>
    )
}

export default Planet;