import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import "./NavMenu.css";

const NavMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
       <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            NWSLab
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Works"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item signup">
              <NavLink
                exact
                to="/signUp"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
               
              > 
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item signin">
              <NavLink
                exact
                to="/signIn"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
               
              > 
                Sign In
              </NavLink>
            </li>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            <FaBars className={click ? " faTimes" : " Fabars"}/>
          </div>
        </div>
      </nav>

    </>
  );
};
export default NavMenu
