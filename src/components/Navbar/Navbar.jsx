import './Navbar.css';
import React from 'react';

export default function Navbar({ Link }) {
    return (
        <nav>
            <div className="nav-content">
                <p className="logo">Pokedex</p>
                <div className="nav-links">
                    <Link className="nav-link" to="/">Search</Link>
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                </div>
            </div>
        </nav>
    )
}
