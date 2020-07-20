import React from 'react';
import Lightning from '../../imgs/flash.png';



const Header = ({toggleShowModal}) => {
    return (
        <header className="workout-header">
            <img className="lightning-img" src={Lightning} />
            <h1 className="title-workout">Workout Planner </h1>
        </header>
    );
}

export default Header;