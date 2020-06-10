import React, { useState } from 'react'
import on from '../assets/onfinal.png';
import off from '../assets/offFinal.png';
import './LightBulb.css';

export default function LightBulb() {
    const [Bulb, setBulb] = useState(false);
    return (
        <div className="bulb">
            <br />
            <img src={`${Bulb ? on : off}`} alt="bulb" />
            <br />
            <button className="buttn" onClick={() => setBulb(true)} >On</button>
            <button className="buttn" onClick={() => setBulb(false)} >Off</button>
        </div>
    )
}
