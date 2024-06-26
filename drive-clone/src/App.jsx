import React, { useEffect, useState } from "react";
import axios from "axios";
import Files from "./components/Files";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  // Function to fetch all files
  const fetchFiles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/files"
      );
      setFiles(response.data.data); // Update the files state with fetched files
    } catch (error) {
      console.error("Error fetching files:", error);
      // Handle error gracefully
    }
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  // Function to upload the selected file
  const uploadFile = async (localFile) => {
    console.log(localFile);
    try {
      const formData = new FormData();
      formData.append("file", localFile);

      const response = await axios.post(
        "http://localhost:8000/api/v1/users/files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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

  const renameFile = async (id, newName) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/users/files/${id}`,
        { name: newName }
      );
      console.log("File renamed:", response.data);
      // Update the files state with the renamed file
      const updatedFiles = files.map(file => 
        file._id === id ? { ...file, name: newName } : file
      );
      setFiles(updatedFiles);
      setRenameFileId(null); // Reset the renameFileId after renaming
    } catch (error) {
      console.error("Error renaming file:", error);
      // Handle error gracefully
    }
  };

  return (
    <>
      <Header />
      <div className="app-main">
        <Sidebar handleFileChange={handleFileChange} />
        <Files
          files={files}
          selectedFile={selectedFile}
          handleFileChange={handleFileChange}
          deleteFile={deleteFile}
          renameFile={renameFile}
        />
      </div>
    </>
  );
}

export default App;
