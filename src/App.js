import React from "react";
import BackgroundSlider from "./Components/backgroundSlider";
import { Home } from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<BackgroundSlider />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
