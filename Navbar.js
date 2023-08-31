import React from "react";
import navbar from "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbarbackground">
        {/* chaitanya bharathi institute of technology */}
      </div>
      <div className="navbar">
        <div className="topnavbar">
          <div className="topnavbarleft">
            <span>chaitanya bharathi institute of technology</span>
          </div>

          <div className="topnavbarright">
            <span className="information">Information for : </span>
            <a href="#">
              <NavLink to="/" end>
                Home
              </NavLink>
            </a>
            <a href="#">Research</a>
            <a href="#">Academics</a>
            <a href="#">Faculty&Staff</a>
            <a href="#">Alumni</a>
            <a href="#">Admissons</a>
            <a href="#">
              <span>
                <SearchIcon />
                Search
              </span>
            </a>
          </div>
        </div>
        <div className="bottomnavbar">
          <div className="bottomnavbar-wrapper">
            <a href="#">News</a>
            <a href="#">Events</a>
            <a href="#">Families</a>
            <a href="#">CampusLife</a>
            <a href="#">HealthCare</a>
            <a href="#">
              <NavLink to="/student" end>
                Student
              </NavLink>
            </a>
            <a href="#">
              <NavLink to="/clubs" end>
                Clubs
              </NavLink>
            </a>
            <a href="#">
              <NavLink to="/about" end>
                About
              </NavLink>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
