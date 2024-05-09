import logo from './logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => (
    <nav>
        {/* <h1>Code with Vivek</h1> */}
        <div>
            <a href="/" id="logolink"><img className="logo" src={logo} alt="Code With Vivek"></img></a>
        </div>

        <ul>
            <li>
                <NavLink to="/" className="navlink">Home</NavLink>
            </li>
            <li>
                <NavLink to="/courses" className="navlink">Courses</NavLink>
            </li>            
            <li>
                <NavLink to="/about" className="navlink">About</NavLink>
            </li>
            <li>
                <NavLink to="/articles-list" className="navlink">Articles</NavLink>
            </li>                        
        </ul>
    </nav>
);

export default NavBar;