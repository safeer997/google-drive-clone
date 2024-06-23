import React from "react";
import "../css/Files.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function Files() {
  return (
    <>
      <div className="files">
        <div className="data_list">
          <div className="detailsrow detailsrow1">
            <p>
              <b className="icon">
                Name
                <span>
                  <ArrowUpwardOutlinedIcon />
                </span>
              </b>
            </p>
            <p>
              <b className="owner">Owner</b>
            </p>
            <p>
              <b>Last modified</b>
            </p>
            <p>
              <b>Size</b>
            </p>
          </div>
          <div className="detailsrow">
            <p>
              <DriveFolderUploadOutlinedIcon className="folder-icon" />
              Folder name
            </p>
            <p>Me</p>
            <p>23 Jun, 2024</p>
            <p>99 kb</p>
          </div>
          <div className="detailsrow">
            <p>
              <DriveFolderUploadOutlinedIcon className="folder-icon" />
              Folder name
            </p>
            <p>Me</p>
            <p>23 Jun, 2024</p>
            <p>99 kb</p>
          </div>
          <div className="detailsrow">
            <p>
              <DriveFolderUploadOutlinedIcon className="folder-icon" />
              Folder name
            </p>
            <p>Me</p>
            <p>23 Jun, 2024</p>
            <p>99 kb</p>
          </div>
          <div className="detailsrow">
            <p>
              <DriveFolderUploadOutlinedIcon className="folder-icon" />
              Folder name
            </p>
            <p>Me</p>
            <p>23 Jun, 2024</p>
            <p>99 kb</p>
          </div>
          <div className="detailsrow">
            <p>
              <DriveFolderUploadOutlinedIcon className="folder-icon" />
              Folder name
            </p>
            <p>Me</p>
            <p>23 Jun, 2024</p>
            <p>99 kb</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Files;
