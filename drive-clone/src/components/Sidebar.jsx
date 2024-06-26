// Sidebar.js

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import "../css/Sidebar.css";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div
      className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}
      onMouseEnter={showSidebar}
      onMouseLeave={hideSidebar}
    >
      <div className="sidebar_button">
        <button>
          <AddIcon /> <span>New</span>
        </button>
      </div>
      <div className="options">
        <div className="single-option">
          <HomeIcon />
          <span>Home</span>
        </div>

        <div className="single-option">
          <PhonelinkIcon />
          <span>Computers</span>
        </div>

        <div className="single-option">
          <SupervisorAccountOutlinedIcon />
          <span>Shared with me</span>
        </div>

        <div className="single-option">
          <ScheduleIcon />
          <span>Recent</span>
        </div>

        <div className="single-option">
          <StarBorderOutlinedIcon />
          <span>Starred</span>
        </div>

        <div className="single-option">
          <ReportGmailerrorredOutlinedIcon />
          <span>Spam</span>
        </div>

        <div className="single-option">
          <DeleteOutlineOutlinedIcon />
          <span>Trash</span>
        </div>

        <div className="single-option">
          <WbCloudyOutlinedIcon />
          <span>Storage</span>
        </div>

        <div className="progress-bar">
          <progress size="tiny" value="50" max="100" />
          <span>350.6 MB of 15 GB used</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
