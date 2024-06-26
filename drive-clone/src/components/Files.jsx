import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Files.css";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Alert } from "@mui/material";

function Files() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  // Function to fetch all files
  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/users/files");
      setFiles(response.data.data); // Update the files state with fetched files
    } catch (error) {
      console.error("Error fetching files:", error);
      // Handle error gracefully
    }
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Function to upload the selected file
  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axios.post("http://localhost:8000/api/v1/users/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded:", response.data);
      setFiles([...files, response.data.data]); // Update the files state with the new file
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error gracefully
    }
  };

  // Function to delete a file
  const deleteFile = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/users/files/${id}`);
      console.log("File deleted:", id);
      setFiles(files.filter((file) => file._id !== id)); // Update the files state by removing the deleted file
    } catch (error) {
      console.error("Error deleting file:", error);
      // Handle error gracefully
    }
  };

  // Function to render the list of files
  const renderFiles = () => {
    return files.map((file) => (
      <div className="detailsrow" key={file._id}>
        <p>
          <InsertDriveFileIcon className="file-icon" />
          {file.name}
        </p>
        <p>Me</p>
        <p>23 Jun, 2024</p>
        <p>{(file.size / 1024).toFixed(2)} kb</p>
        <button onClick={() => deleteFile(file._id)}>Delete</button>
      </div>
    ));
  };

  return (
    <>
      <div className="files">
        <div className="add_folder_file">
          <label className="file">
            Add File
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="file-upload"
            />
          </label>
          <button onClick={uploadFile}>Upload File</button>
          {selectedFile && (
            <Alert severity="info">Selected File: {selectedFile.name}</Alert>
          )}
        </div>
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
