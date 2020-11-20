import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import data from "../../../data/db.json";

import "./Navbar.scss";

const Navbar = () => {
  const DB = data.navbarDB[0];
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navElements = DB.navLinks.map((item, index) => (
    <li key={index} className='navItem'>
      <NavLink to={item.link} className='navLinks' onClick={closeMobileMenu}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className='navbar'>
        <div className='navbarContainer'>
          <NavLink to='/' className='navbarLogo'>
            <p>{DB.logo}</p>
          </NavLink>
          <div className='menuIcon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            {navElements}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
