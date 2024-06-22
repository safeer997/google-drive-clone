import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import '../css/Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
          alt="driveIcon"
        />
        <span>Drive</span>
      </div>

      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Search in Drive" />
        <TuneIcon />
      </div>

      <div className="header_options">
        <span>
          <HelpOutlineOutlinedIcon className="material-icons material-icons-spacing" />
          <SettingsIcon  className="material-icons" />
        </span>
        <span>
          <AppsIcon  className="material-icons material-icons-spacing" />
          <AccountCircleIcon  className="material-icons" />
        </span>
      </div>
    </div>
  );
}

export default Header;
