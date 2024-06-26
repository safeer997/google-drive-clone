import React, { useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "../css/Files.css";
import { format } from 'date-fns';

function Files({ files, deleteFile, renameFile }) {
  const [renameFileId, setRenameFileId] = useState(null);
  const [newFileName, setNewFileName] = useState("");

  const startRenaming = (fileId, currentName) => {
    setRenameFileId(fileId);
    setNewFileName(currentName);
  };

  const handleRename = (fileId) => {
    renameFile(fileId, newFileName);
    setRenameFileId(null);
  };

  // Function to render the list of files
  const renderFiles = () => {
    return files.map((file) => (
      <div className="detailsrow" key={file._id}>
        {renameFileId === file._id ? (
          <>
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <button onClick={() => handleRename(file._id)}>Save</button>
            <button onClick={() => setRenameFileId(null)}>Cancel</button>
          </>
        ) : (
          <>
            <p>
              <InsertDriveFileIcon className="file-icon" />
              {file.name}
            </p>
            <p>Me</p>
            <p>{format(new Date(file.updatedAt), 'yyyy-MM-dd')}</p>
            <p>{(file.size / 1024).toFixed(2)} kb</p>
            <button onClick={() => deleteFile(file._id)}>Delete</button>
            <button onClick={() => startRenaming(file._id, file.name)}>Rename</button>
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
          {renderFiles()}
        </div>
      </div>
    </>
  );
}

export default Files;
