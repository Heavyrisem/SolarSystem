import React from 'react';
import '../style/Config.css';

import FPS from './FPS';

interface ConfigP {
    SpaceTime: number,
    setSpaceTime: React.Dispatch<React.SetStateAction<number>>,
    Scale: number,
    setScale: React.Dispatch<React.SetStateAction<number>>,
}
function Config(props: ConfigP) {
    return (
        <div className="Config">
            <span>Config</span>
            <div>
                <span>Time</span> <input type="number" defaultValue={props.SpaceTime} onChange={(e) => {props.setSpaceTime(Number(e.target.value) | 1)}}/>
            </div>
            <div>
                <span>Scale</span> <input type="number" defaultValue={props.Scale} onChange={(e) => {props.setScale(Number(e.target.value))}}/>
            </div>
            <div style={{textAlign: 'left'}}>
                <span>FPS: </span> <FPS />
            </div>
        </div>
    )
}

export default Config;