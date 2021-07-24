import React, { useEffect, useRef } from "react";
import '../style/Starfield.css';


function Starfield() {
    const CanvasRef = useRef<HTMLCanvasElement>(null);
    const Stars = 500;

    const Style: React.CSSProperties = {
	    background: '#1a1d2c'
    }

    useEffect(() => {
        if (CanvasRef.current) {

            let context = CanvasRef.current.getContext("2d") as CanvasRenderingContext2D;
            for (let i = 0; i < Stars; i++) {
                let x = Math.random() * CanvasRef.current.offsetWidth;
                let y = Math.random() * CanvasRef.current.offsetHeight;
                context.fillStyle = "white";
                context.fillRect(x,y,1,1);
            }

        }
    }, []);

    return (
        <canvas className="Starfield" width={window.screen.width} height={window.screen.height} style={Style} ref={CanvasRef}>

        </canvas>
    )       
}

export default Starfield;