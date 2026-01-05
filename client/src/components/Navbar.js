import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-logo">
        🦁 WildGuard<span style={{color:'#fff'}}>AI</span>
      </NavLink>
      <div className="nav-links">
        {/* NavLink adds an 'active' class automatically when clicked */}
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        <NavLink to="/features" className={({ isActive }) => (isActive ? "active-link" : "")}>Features</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
        <NavLink to="/test" className={({ isActive }) => (isActive ? "active-link" : "")}>Live Test</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;  