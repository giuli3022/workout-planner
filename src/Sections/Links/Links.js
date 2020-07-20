import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
    

const Links = () => {
    return (
        <nav className="nav-day">
            <Link className="link-day" to="/">
                <FontAwesomeIcon icon={faHome} className="home-icon" />
            </Link>
            <Link className="link-day" to="/Monday">Monday</Link>
            <Link className="link-day" to="/Tuesday">Tuesday</Link>
            <Link className="link-day" to="/Wednesday">Wednesday</Link>
            <Link className="link-day" to="/Thursday">Thursday</Link>
            <Link className="link-day" to="/Friday">Friday</Link>
            <Link className="link-day" to="/Saturday">Saturday</Link>
            <Link className="link-day" to="/Sunday">Sunday</Link>
        </nav>
    );
}

export default Links;

