import React, { useState } from "react";
import { ChromePicker } from "react-color";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "../css/Files.css";
import { format } from "date-fns";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ColorLensIcon from '@mui/icons-material/ColorLens';

function Files({ files, deleteFile, renameFile }) {
  const [renameFileId, setRenameFileId] = useState(null);
  const [newFileName, setNewFileName] = useState("");
  const [fileIconColor, setFileIconColor] = useState("#ff0000");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const startRenaming = (fileId, currentName) => {
    setRenameFileId(fileId);
    setNewFileName(currentName);
  };

  const handleRename = (fileId) => {
    renameFile(fileId, newFileName);
    setRenameFileId(null);
  };

  const handleColorChange = (color) => {
    setFileIconColor(color.hex);
  };

  // Function to render the list of files
  const renderFiles = () => {
    return files.map((file) => (
      <div key={file._id}>
        {renameFileId === file._id ? (
          <>
            <input 
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <button className="save-icon" onClick={() => handleRename(file._id)}>Save</button>
            <button className="cancel-icon" onClick={() => setRenameFileId(null)}>Cancel</button>
          </>
        ) : (
          <>
            <div className="detailsrow">
              <p>
                <InsertDriveFileIcon style={{ color: fileIconColor }} className="file-icon" />
                {file.name}
              </p>
              <p>Me</p>
              <p>{format(new Date(file.updatedAt), "yyyy-MM-dd")}</p>
              <p>{(file.size / 1024).toFixed(2)} kb</p>
            </div>

            <div className="rename-delete-icons-div">
              <button className="delete-icon" onClick={() => deleteFile(file._id)}>
                <DeleteForeverIcon style={{ fontSize: "14px" }} />
              </button>
              <button className="rename-icon" onClick={() => startRenaming(file._id, file.name)}>
                <DriveFileRenameOutlineOutlinedIcon style={{ fontSize: "14px" }} />
              </button>
              <button className="rename-icon"   onClick={() => setDisplayColorPicker(!displayColorPicker)}>
                <ColorLensIcon style={{ fontSize: "14px" }} />
              </button>
            </div>
            {displayColorPicker && (
              <div className="color-picker-wrapper">
              <div 
                className="color-picker-overlay"
                onClick={() => setDisplayColorPicker(false)} 
              />
              <ChromePicker color={fileIconColor} onChange={handleColorChange} />
            </div>
            )}
            <div className="hr-line"></div>
          </>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="files">
        <div className="add_folder_file"></div>
        <div className="data_list">
          <div className="detailsrow hr-line">
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
          {renderFiles()}
        </div>
      </div>
    </>
  );
}

export default Files;
