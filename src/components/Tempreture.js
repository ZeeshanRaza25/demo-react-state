import React, { useState } from 'react'
import './Temprature.css'

function Temprature() {
    let [Counter, setCounter] = useState(20)
    return (
        <div className="container">
            <span className='count'>{Counter}</span>
            <br />
            <button className='btn' onClick={() => { setCounter(Counter++) }}>increment</button>
            <button className='btn' onClick={() => { setCounter(Counter--) }}>decrement</button>
        </div>
    )
}

export default  Temprature;