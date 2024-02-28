import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isOpen, setIsOPen] = useState(false);

  const toggleNavBar = () => {
    setIsOPen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarToggleicon" onClick={toggleNavBar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <nav className={`navbarLinks ${isOpen ? "active" : "nonActive"}`}>
          <div class="left">Ali's Portfolio</div>

          <div class="Right">
            <ul>
              <li>
                <Link to={"/"} className="pageLink">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/aboutpage"} className="pageLink">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/projectpage"} className="pageLink">
                  projects
                </Link>
              </li>
              <li>
                <Link to={"/servicespage"} className="pageLink">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/contactpage"} className="pageLink">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
