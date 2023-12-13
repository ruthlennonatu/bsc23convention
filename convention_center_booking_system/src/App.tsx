import "./App.css";
import RegisterComponent from "./components/Registration";
import LoginComponent from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import BookingsDisplay from "./components/BookingsDisplay";
import Footer from "./components/Footer";
import CustomerPage from "./components/CustomerPage";
import AdminDashboard from "./components/AdminDashboard";
import DisplayCustomers from "./components/DisplayCustomers";

function App() {
  const workshopData = {
    id: 1,
    workshop: "Example Workshop",
    venue: "Example Venue",
    date: "2023-11-14",
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Router>
        <div>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/Login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            
            <Route
              path="/bookings"
              element={<BookingsDisplay bookings={[workshopData]} />}
            />
            <Route path="/customerpage" element={<CustomerPage />} />
            <Route path="/diplayCustomers" element={<DisplayCustomers />} />
          </Routes>
          {/* <BookingsDisplay bookings={[workshopData]} /> */}
          <Footer companyName="Convention Center" year={currentYear} /> 
        </div>
      </Router>
    </>
  );
}

export default App;