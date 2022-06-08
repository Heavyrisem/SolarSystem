import React, { useEffect, useRef } from "react";
import useRotationAnim from "../hooks/useRotateAnim";
import "../style/Asteroidbelt.css";

interface AsteroidbeltProps {
  radius: number;
  size: number;
  orbitalCycleDay: number;
}
const Asteroidbelt: React.FC<AsteroidbeltProps> = ({
  radius,
  size,
  orbitalCycleDay,
}) => {
  const CanvasRef = useRef<HTMLCanvasElement>(null);

  const { style } = useRotationAnim({
    orbitalCycleDay,
    style: {
      width: radius + "rem",
      height: radius + "rem",
      zIndex: 5,
      transform: "translate(-50%, -50%)",
    },
  });

  useEffect(() => {
    const { current: canvas } = CanvasRef;

    if (canvas) {
      console.log("Draw", canvas);
      let context = canvas.getContext("2d") as CanvasRenderingContext2D;

      context.fillStyle = "white";

      for (let i = 0; i < 1000; i++) {
        let x = Math.random() * canvas.offsetWidth;
        let y = Math.random() * canvas.offsetHeight;
        let radius = Math.random() * 2;
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "rgba(223, 223, 223, 0.5)";
        context.fill();
        // context.fillRect(x,y,1,1);
      }

      canvas.style.setProperty(
        "--circle",
        `${(RemToPx(radius) - RemToPx(size)) / 2}px`
      );
    }
  }, [radius, size]);

  function RemToPx(n: number): number {
    return n * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  return (
    <canvas
      className="Asteroidbelt"
      ref={CanvasRef}
      style={style}
      width={RemToPx(radius)}
      height={RemToPx(radius)}
    ></canvas>
  );
};

export default Asteroidbelt;
