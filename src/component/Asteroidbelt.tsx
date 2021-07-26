import React, { useEffect, useRef, useState } from "react";
import '../style/Asteroidbelt.css';

interface AsteroidbeltP {
    radius: number
    size: number,
    orbitalCycleDay: number
}
function Asteroidbelt(props: AsteroidbeltP) {
    const CanvasRef = useRef<HTMLCanvasElement>(null);
    let FrameReq = -1;
    let Rotation = 0;
    let Speed = 360 / (props.orbitalCycleDay * 86400);

    useEffect(() => {
        FrameReq = (requestAnimationFrame(Rotate));
        return () => {
            console.log("Cancle", FrameReq);
            cancelAnimationFrame(FrameReq);
        }
    }, [props.orbitalCycleDay]);

    useEffect(() => {
        if (CanvasRef.current) {
            console.log("Draw", CanvasRef.current);
            let context = CanvasRef.current.getContext("2d") as CanvasRenderingContext2D;
            context.fillStyle = "white";
            for (let i = 0; i < 1000; i++) {
                let x = Math.random() * CanvasRef.current.offsetWidth;
                let y = Math.random() * CanvasRef.current.offsetHeight;
                let radius = Math.random() * 2;
                context.beginPath();
                context.arc(x, y, radius, 0, 360);
                context.fillStyle = "rgba(223, 223, 223, 0.5)";
                context.fill();
                // context.fillRect(x,y,1,1);
            }
            CanvasRef.current.style.setProperty("--circle", `${(RemToPx(props.radius) - RemToPx(props.size)) / 2}px`);
        }
    }, [props.size]);

    function Rotate() {
        if (CanvasRef.current) 
            CanvasRef.current.style.transform = ['translate(-50%, -50%)', `rotate(${Rotation -= Speed}deg)`].join(' ')
            FrameReq = (requestAnimationFrame(Rotate));
    }

    function RemToPx(n: number): number {
        return n * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const Style: React.CSSProperties = {
        width: props.radius+'rem',
        height: props.radius+'rem',
	    // background: 'rgba(0, 0, 0, 0)',
        zIndex: 5
    }
    return (
        <canvas className="Asteroidbelt" ref={CanvasRef} style={Style} width={RemToPx(props.radius)} height={RemToPx(props.radius)}>
        </canvas>
    )
}

export default Asteroidbelt;