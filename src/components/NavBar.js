import React, { useState } from 'react';
import RightSidebar from './RightSidebar'; // Import the RightSidebar component
import "../styles/navbar.scss"; // Import SCSS for styling

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Navbar</div>
        <div className="navbar-actions">
          <button className="btn-add-widget" onClick={toggleSidebar}>
            Add Widget
          </button>
        </div>
      </nav>
      {isSidebarOpen && <RightSidebar toggleSidebar={toggleSidebar} />} {/* Render sidebar */}
    </>
  );
};

export default Navbar;


