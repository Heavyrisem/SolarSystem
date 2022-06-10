import React, { useRef } from "react";
import { useEffectOnce } from "../hooks/useEffectOnce";
import "../style/Starfield.css";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const Stars = 500;

  useEffectOnce(() => {
    const { current: canvas } = canvasRef;

    if (canvas) {
      let context = canvas.getContext("2d") as CanvasRenderingContext2D;
      for (let i = 0; i < Stars; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight;
        let radius = Math.random() * 1.1;
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "rgba(223, 223, 223, 0.8)";
        context.fill();
      }
    }
  });

  return (
    <canvas
      className="Starfield"
      width={document.body.offsetWidth}
      height={document.body.offsetHeight}
      ref={canvasRef}
    ></canvas>
  );
};

export default Starfield;
