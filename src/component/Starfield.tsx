import React, { useEffect, useRef } from "react";
import '../style/Starfield.css';


function Starfield() {
    const CanvasRef = useRef<HTMLCanvasElement>(null);
    const Stars = 500;

    const Style: React.CSSProperties = {
	    background: ''
    }

    useEffect(() => {
        if (CanvasRef.current) {

            let context = CanvasRef.current.getContext("2d") as CanvasRenderingContext2D;
            for (let i = 0; i < Stars; i++) {
                let x = Math.random() * CanvasRef.current.offsetWidth;
                let y = Math.random() * CanvasRef.current.offsetHeight;
                let radius = Math.random() * 1.1;
                context.beginPath();
                context.arc(x, y, radius, 0, 360);
                context.fillStyle = "rgba(223, 223, 223, 0.8)";
                context.fill();
            }

        }
    }, []);

    return (
        <canvas className="Starfield" width={document.body.offsetWidth} height={document.body.offsetHeight} ref={CanvasRef}>
            
        </canvas>
    )       
}

export default Starfield;