import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="Sports">Sports</Link></li>
                <li className="nav-item"><Link to="Business">Business</Link></li>
                <li className="nav-item"><Link to="Science">Science</Link></li>
                <li className="nav-item"><Link to="Health">Health</Link></li>
                <li className="nav-item"><Link to="Technology">Technology</Link></li>
                <li className="nav-item"><Link to="Entertainment">Entertainment</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
