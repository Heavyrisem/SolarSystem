import React, { useEffect, useState } from 'react';

function FPS() {
    const [fps, setFps] = useState("");
    let Perf = performance.now();

    useEffect(Counter, []);

    function Counter() {
        let delta = (performance.now() - Perf) / 1000;
        Perf = performance.now();

        setFps((1/delta).toFixed(2));
        requestAnimationFrame(Counter);
    }

    return (
        <span className="FPS">
            {fps}
        </span>
    )
}

export default FPS;