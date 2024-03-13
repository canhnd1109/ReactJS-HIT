import './Button.css';
import { useState } from 'react';
const Button = () => {
    const [state, setState] = useState('OFF');

    const handleClick = () => {
        if (state === 'OFF') {
            setState('ON');
        }
        if (state === 'ON') {
            setState('OFF');
        }
    };
    return (
        <>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" onClick={() => handleClick()}>
                    <p className="on">{state}</p>
                </span>
            </label>
        </>
    );
};

export default Button;
