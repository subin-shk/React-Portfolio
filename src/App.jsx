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
      <div className="wrapper container mx-auto grid grid-cols-1 lg:grid-cols-4">
        <div className="side-profile lg:fixed  text-center lg:col-span-1">
          <SideProfile />
        </div>
        <div className="navbar w-full ">
          <Navbar />
        </div>
        <div className="side-contents  lg:ml-96 lg:col-span-4">
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
