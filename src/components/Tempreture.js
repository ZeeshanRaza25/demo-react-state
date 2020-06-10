import React, { useState } from 'react'
import './Temprature.css'

function Temprature() {
    let [Celsius, setCelsius] = useState(0);
    return (
        <div className="container">
            <br />
            <span className='span'>Temprature in Celsius: {Celsius} °C</span>
            <br />
            <span className='span'>Temprature in Kelvin: {(Celsius + 273.15).toFixed(2)} K</span>
            <br />
            <span className='span'>Temprature in Fahrenheit: {(Celsius * 1.8 + 32).toFixed(2)} °F</span>
            <br />
            <br />
            <button className='button' onClick={() => {setCelsius(Celsius++)}}>+</button>
            <button className='button' onClick={() => {setCelsius(Celsius--)}}>-</button>
            <h5>Note: Buttons increase or decrease only Celsius Temprature</h5>
        </div>
    )
}

export default Temprature;