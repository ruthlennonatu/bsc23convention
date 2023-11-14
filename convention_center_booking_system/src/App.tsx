import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RegisterComponent from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
        </div>
      </Router>
      <RegisterComponent />
    </>
  );
}

export default App;
