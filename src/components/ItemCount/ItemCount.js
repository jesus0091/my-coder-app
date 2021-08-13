import React from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

function ItemCount() {
    const [number, setNumber] = React.useState(1);

    const handleDown = () => {
        setNumber(number - 1);
    };
    const handleUp = () => {
        setNumber(number + 1);
    };

    return (
        <div className="itemCount">
            <button className='buttonCount' onClick={handleDown}><FontAwesomeIcon icon={faMinus} /></button>
            <span>{number}</span>
            <button className='buttonCount' onClick={handleUp}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
}
export default ItemCount
