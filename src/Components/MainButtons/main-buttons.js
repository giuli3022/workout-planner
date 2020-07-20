import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const MainButtons = ({ toggleShowModal }) => {
    return (
        <div className="main-buttons">
            <div className="add-button">
                <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={toggleShowModal} />
            </div>
        </div>
    )
}

export default MainButtons;

/*

import { faCalculator } from '@fortawesome/free-solid-svg-icons';

            <span className="calculator-button">
                <FontAwesomeIcon icon={faCalculator} className="calculator-icon" />
            </span>
*/