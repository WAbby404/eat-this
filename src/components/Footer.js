import React from 'react';
import '../styles/Footer.scss';
import logo from '../images/eat-this-logo-inverse.svg';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <p>Abby Waddell 2022</p>

                <Link to="/" className="footer__brand">
                    <img src={logo} className="footer__img" alt="Eat This Logo"/>
                    <h1>Eat This</h1>
                </Link>

                <div className="footer__socials">
                    <a href="https://github.com/WAbby404" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-2x fa-footer"></i></a>
                    <a href="https://www.linkedin.com/in/abbywaddell4042/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin fa-2x fa-footer"></i></a>
                    <a href="https://wabby404.github.io/portfolio-redo/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square fa-2x fa-footer"></i></a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;