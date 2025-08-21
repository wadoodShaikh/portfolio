import React, { useState } from "react";

const Header = () => {

   const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
     setIsActive(!isActive);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h1 style={{cursor: "pointer"}}> WADOOD SHAIKH</h1>
        </div>
        <nav>
          <ul className={`nav-links ${isActive ? "active" : ""}`}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
