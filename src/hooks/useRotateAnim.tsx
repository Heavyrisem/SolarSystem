import React, { useCallback, useEffect, useMemo, useState } from "react";

export interface RotationAnimProps {
  orbitalCycleDay: number;
  style?: React.CSSProperties;
}

function useRotationAnim({
  orbitalCycleDay,
  style: overrideStyle,
}: RotationAnimProps) {
  const [rotation, setRotation] = useState<number>(0);

  const Rotate = useCallback(() => {
    let Speed = 360 / (orbitalCycleDay * 86400);
    setRotation(rotation - Speed);
  }, [rotation, orbitalCycleDay]);

  useEffect(() => {
    requestAnimationFrame(Rotate);
  }, [Rotate]);

  const style: React.CSSProperties = useMemo(() => {
    const { transform } = overrideStyle ?? { transform: "" };

    const temp = {
      ...overrideStyle,
      transform: [transform, `rotate(${rotation}deg)`].join(" "),
    };
    return temp;
  }, [rotation, overrideStyle]);

  return {
    rotation,
    style,
  };
}

export default useRotationAnim;
