import React, { useState } from 'react';
import './room.css'

function Room() {
    let [isLit, setLit] = useState(false);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            <br /><br /><br /><br /><br />
            This Room is {isLit ? "lit" : "dark"}
            <br />
            <br />
            <button onClick={() => setLit(!isLit)} >Toggle Light</button>
        </div>
    );
}

export default Room;