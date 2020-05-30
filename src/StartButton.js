import React, { useState } from 'react';
import './App.css';

function StartButton() {
    const [started, setStarted] = useState(false);

    return (
        <button onClick={() => setStarted(true)}>Start</button>
    );
}

export default StartButton;