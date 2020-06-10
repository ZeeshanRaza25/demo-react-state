import React, { useState } from 'react'
import on from '../assets/on1.png';
import off from '../assets/off1.png';

export default function LightBulb() {
    const [Bulb, setBulb] = useState(false);
    return (
        <div className="bulb">
            <img src={`${Bulb ? on : off}`} alt="bulb" />
            <button onClick={() => setBulb(true)} >On</button>
            <button onClick={() => setBulb(false)} >Off</button>
        </div>
    )
}
