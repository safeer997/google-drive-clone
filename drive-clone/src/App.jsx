import "./App.css";
import Files from "./components/Files";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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
