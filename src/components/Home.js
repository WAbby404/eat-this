import React from 'react';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className="hero">
            <div className="hero__wrapper">
                <>
                    <h3 className="hero__subtitle hero__subtitle--small">Let's</h3>
                    <h2 className="hero__title">Eat This</h2>
                </>
                <h1 className="hero__subtitle">Find Recipes. Plan Your Meals. Make Grocery Lists.</h1>
                <Link to="/search" className="hero__btn">Get Started</Link>
            </div>
        </main>
    );
}

export default Home;