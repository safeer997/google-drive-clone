// App.js

import React from "react";
import Files from "./components/Files";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app-main">
        <Sidebar />
        <Files />
      </div>
    </>
  );
}

export default App;
