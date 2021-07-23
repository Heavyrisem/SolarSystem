import React from 'react';
import '../style/Planet.css';

import Shadow from '../img/PlanetShadow.svg';

interface PlanetP {
    img: string,
    size: number
}
function Planet(props: PlanetP) {
    return (
        <>
            <img className="Planet" src={props.img} style={{width: props.size+'rem'}} />
            <img className="Planet" src={Shadow} style={{width: props.size+'rem', transform: 'translate(-50%, -100%)'}} />
        </>
    )
}

export default Planet;