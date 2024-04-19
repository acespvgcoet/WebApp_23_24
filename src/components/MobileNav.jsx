import React from "react";
import { Link } from "react-router-dom";
import "./css/MobileNav.css";

const MobileNav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showHamburger, setShowHamburger] = React.useState(false);

  const [scrolled, setIsScrolled] = React.useState(false);

  const menuRef = React.useRef();
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    const handleScreenSize = () => {
      if (window.outerWidth < 779) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };
    handleScreenSize(); // Call initially to set the state based on the screen size
    window.addEventListener("resize", handleScreenSize);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header id="header" className={scrolled ? "header-scrolled" : ""}>
        <div className="contain">
          <div id="logo" class="pull-left">
            <img src="img/ACES Logo White Transparent.png" id="img" alt="" />
          </div>
          <nav id="nav-menu-contain-mobile">
            <nav>
              {showHamburger && (
                <button className="hamburger-menu" onClick={toggleMenu}>
                  <i className={`fa fa-${showMenu ? "times" : "bars"}`}></i>
                </button>
              )}
            </nav>
            <ul
              className={
                showHamburger && showMenu
                  ? "nav-menu-mobile"
                  : `nav-menu${window.outerWidth < 779 ? "-none" : ""}`
              }
            >
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={toggleMenu}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/events" onClick={toggleMenu}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/newsletter" onClick={toggleMenu}>
                  NewsLetter
                </Link>
              </li>
              <li>
                <Link to="/magazine" onClick={toggleMenu}>
                  Magazine
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>

              <li className="buy-tickets" onClick={toggleMenu}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSczXQK-AuWDGv13yABEy8Y8RpSc5_Uuf4e57wK2KsQCQbQPDw/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MobileNav;
