import { useState } from 'react';
import './Toggle.scss';
function Toggle() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => (isOn ? setIsOn(false) : setIsOn(true));
    return (
        <div className="toggle" onClick={handleToggle}>
            <div className={`toggle-circle ${isOn && 'active'}`}></div>
        </div>
    );
}

export default Toggle;
