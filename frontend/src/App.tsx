import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomePage from "./HomePage";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";

interface Props {}

function App(props: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
