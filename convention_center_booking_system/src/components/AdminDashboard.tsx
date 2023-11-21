import React, { MouseEvent } from "react";

interface AdminDashboardProps {}

const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const handleButtonClick =
    (option: string) => (event: MouseEvent<HTMLButtonElement>) => {
      // Handle the button click based on the option selected (e.g., manage users, conventions, workshops)
      console.log(`Selected option: ${option}`);
      // Implement specific logic or routing here based on the option chosen
    };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="button-container">
        <button
          type="button"
          className="btn btn-secondary"
          style={{ padding: "10px" }}
          onClick={handleButtonClick("Users")}
        >
          Manage Users
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ padding: "10px" }}
          onClick={handleButtonClick("Conventions")}
        >
          Manage Conventions
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ padding: "10px" }}
          onClick={handleButtonClick("Workshops")}
        >
          Manage Workshops
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
