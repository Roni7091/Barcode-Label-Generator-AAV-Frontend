import { React, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import HomePage from "./HomePage";
import Labels from "./Labels";
import DownloadedFileCard from "./DownloadedFileCard";
import Signupform from "./Signupform";
import Loginform from "./Loginform";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<Signupform/>} />
      <Route path="/login" element={<Loginform/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<Main />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/allcards" element={<DownloadedFileCard />} />
      </Routes>
    </Router>
  );
};

export default App;
