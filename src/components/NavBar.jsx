import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import logo from '../images/logo.png';


// Credit to: https://reactjsexample.com/react-navbar-responsive-sass-with-hamburger-menu-route-ready/
function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
            <img style={{width: "75px"}} src={logo} alt="Berkeley Stanford Umrah Logo" />
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/umrah">Umrah</Link>
            </li>
            <li onClick={closeMenu}>
              <Link className="importantNavButton" to="/support">Support</Link>
            </li>
            <li onClick={closeMenu}>
              <Link className="importantNavButton" to="/register">Register</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/trips">Trips</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/sponsors">Sponsors</Link>
            </li>
            {/* <li>
              <Link to="/attendees">Attendees</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li> */}

          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;