import React from "react";
import { Link } from "react-router-dom";
import "./css/MobileNav.css";

const MobileNav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showHamburger, setShowHamburger] = React.useState(false);

  const [scrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleScreenSize = () => {
      if (window.outerWidth < 700) {
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
                  : `nav-menu${window.outerWidth < 700 ? "-none" : ""}`
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/newsletter">NewsLetter</Link>
              </li>
              <li>
                <Link to="/magazine">Magazine</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li className="buy-tickets">
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
