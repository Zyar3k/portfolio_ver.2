import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbarContainer'>
          <NavLink to='/' className='navbarLogo'>
            <p>ZYGAN AREK</p>
          </NavLink>
          <div className='menuIcon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li className='navItem'>
              <NavLink to='/' className='navLinks' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='navItem'>
              <NavLink
                to='/about'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                about
              </NavLink>
            </li>
            <li className='navItem'>
              <NavLink
                to='/skills'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                skills
              </NavLink>
            </li>
            <li className='navItem'>
              <NavLink
                to='/portfolio'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                portfolio
              </NavLink>
            </li>
            <li className='navItem'>
              <NavLink
                to='/contact'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
