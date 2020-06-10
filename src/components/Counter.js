import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    let [Counter, setCounter] = useState(20)
    return (
        <div className="container">
            <br /><br /><br />
            <span className='count'>{Counter}</span>
            <br /><br /><br />
            <button className='btn' onClick={() => { setCounter(Counter++) }}>increment</button>
            <button className='btn' onClick={() => { setCounter(Counter--) }}>decrement</button>
        </div>
    )
}

export default Counter;