import React from "react";
import cnavbar from "./cnavbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { NavLink } from "react-router-dom";


function CNavbar(props) {
  console.log(props.name)
  return (
    <>
      <div className="topbarcontainer">
        <div className="topbarleft">
        <div className="logo">{props.name}</div>
        </div>
        <div className="topbarmiddle">
          <div className="searchbar">
            <SearchIcon className="searchicon" />
            <input
              type="text"
              value="search for clubs"
              className="searchinput"
            />
          </div>
        </div>
        <div className="topbarright">
          
          <div className="topbaricons">
            <div className="topbaricon">
              <PersonIcon />
            </div>
            <div className="topbaricon">
              <ChatIcon />
            </div>
            <div className="topbaricon">
              <NotificationAddIcon />
            </div>
          </div>

          <div className="topbarlinks">
            <NavLink to="/">
              <a href="#" className="topbarlink">Logout</a>
            </NavLink>
            <img
            src="https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=170667a&w=0&k=20&c=cVOZ3OYMmZQt9_G4TXXiCM3a3oJQlJ-FLGdVO0rCPpY="
            alt="#"
            className="topbarimage"
          />
          </div>

          
        </div>
      </div>
    </>
  );
}

export default CNavbar;