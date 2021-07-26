import React, { useEffect, useRef, useState } from 'react';
import '../style/Orbit.css';
import Planet from './Planet';

interface props {
    children?: any,
    radius: number,
    size: number,
    img: string,
    orbitalCycleDay: number,
    origin?: boolean,
    startRotation?: number
}

function Orbit(props: props) {
    // const [Rotation, setRotation] = useState<number>(0);
    // const [FrameReq, setFrameReq] = useState<number>(-1);
    let FrameReq = -1;
    let Rotation = 0;
    const Orb = useRef<HTMLDivElement>(null);
    
    function Rotate() {
        if (Orb.current) {
            let Speed = 360 / (props.orbitalCycleDay * 86400);
            // console.log(props.orbitalCycleDay);
            Orb.current.style.transform = ['translate(-50%, -50%)', `rotate(${Rotation -= Speed}deg)`].join(' ');
            // console.log("Frame");
            // setRotation(Rotation + Speed);
            // Orb.current.style.rotate = Number(Orb.current.style.rotate.replace("deg", "")) + "deg";
            FrameReq = (requestAnimationFrame(Rotate));
        }
    }

    useEffect(() => {
        FrameReq = (requestAnimationFrame(Rotate));
        // console.log("Update");
        return () => {
            console.log("Cancle", FrameReq);
            cancelAnimationFrame(FrameReq);
        }
    }, [props]);

    // setInterval(Rotate, 300);

    const Style: React.CSSProperties = {
        width: props.radius+'rem',
        height: props.radius+'rem',
        transform: ['translate(-50%, -50%)'].join(' '),
        // animation: `OrbitRotate infinite ${props.orbitalCycleDay * 86400}s linear`
        // rotate: '0deg'
    }

    return (
        <div className="Orbit" style={Style} ref={Orb}>
            <Planet img={props.img} size={props.size} orbitalCycleDay={props.orbitalCycleDay} origin={props.origin}>
                {props.children}
            </Planet>
        </div>
    )
}

export default Orbit;