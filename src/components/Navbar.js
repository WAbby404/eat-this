import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../images/eat-this-logo.svg';


function Navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        <nav>
            <div className="nav__wrapper">
                <Link className="nav__logo" to="/">
                    <img className="nav__logo__img" src={logo} alt="Eat This logo"/>
                    <h2>Eat This</h2>
                </Link>
                <i className={clicked ? "icon fa-solid fa-xmark fa-2x" : "icon fa-solid fa-bars fa-2x"}
                onClick={() => setClicked(!clicked)}></i>
                <div className={clicked ? "nav__links active" : "nav__links"}>
                    <Link to="/" className="nav__link" onClick={() => setClicked(false)}>Home</Link>
                    <Link to="/search" className="nav__link" onClick={() => setClicked(false)}>Search Recipes</Link>
                    <Link to="/mealplan" className="nav__link" onClick={() => setClicked(false)}>Meal Plan</Link>
                    <Link to="/list" className="nav__link" onClick={() => setClicked(false)}>Shopping List</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;