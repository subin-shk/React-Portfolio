import { useState } from "react";
import SideProfile from "./SideProfile";
import About from "./About";
import Navbar from "./Navbar";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper container mx-auto">
        <div className="side-profile">
          <SideProfile />
        </div>
        <div className="side-contents">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
