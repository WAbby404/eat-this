import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../images/eat-this-logo.svg';


function Navbar() {
    return (
        <nav>
            <div className="nav__wrapper">
                <Link className="nav__logo" to="/">
                    <img src={logo} alt="Eat This logo"/>
                    <h2>Eat This</h2>
                </Link>
                <div className="nav__links">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/search" className="nav__link">Search Recipies</Link>
                    <Link to="/mealplan" className="nav__link">Meal Plan</Link>
                    <Link to="/list" className="nav__link">Shopping List</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;