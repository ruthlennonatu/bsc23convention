import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RegisterComponent from "./components/Registration";
import LoginComponent from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import BookingsDisplay from "./components/BookingsDisplay";

function App() {

  const workshopData = {
    id: 1,
    workshop: 'Example Workshop',
    venue: 'Example Venue',
    date: '2023-11-14',
  };

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
          <BookingsDisplay bookings={[workshopData]}/>
        </div>
      </Router>

    </>
  );
}

export default App;
