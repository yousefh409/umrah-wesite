import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/masjid-logo.avif"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <div className="navbarWrapper">
      <div className="navbarLogoContainer">
        {/* <img className="navbarLogo" src={logo}></img> */}
        <nav className="navbar">
          <div className="nav-container">
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
                  to="/itinerary"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                    Itinerary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/support"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Support
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/attendees"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Attendees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/sponsors"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Sponsors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/gallery"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Gallery
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;