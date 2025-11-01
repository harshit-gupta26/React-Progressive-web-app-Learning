import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBars, FaTimes, FaPlayCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTutorials, setShowTutorials] = useState(false);

  const tutorials = [
    "PHP Tutorial",
    "C++ Tutorial",
    "Java Tutorial",
    "React JS Tutorial",
    "C Tutorial",
    "Python Tutorial",
    "JavaScript Tutorial",
    "CSS Tutorial",
    "HTML Tutorial",
  ];

  const handleToggle = () => {
    setShowTutorials((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* 🧭 Logo */}
        <div className="nav-logo">
          {/* 🧭 Logo Section */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="nav-logo-link"
          >
            <div className="nav-logo">
              <FaGraduationCap className="nav-logo-icon" />
              <h2 className="nav-logo-text">EduLearn</h2>
            </div>
          </Link>
        </div>

        {/* 🔗 Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/notes" onClick={() => setMenuOpen(false)}>
            Notes
          </Link>
          <Link to="/tutorials" onClick={() => setMenuOpen(false)}>
            Tutorials
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {/* 📱 Mobile Only Button */}
          <Link
            to="/courses"
            className="nav-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Start Learning
          </Link>
        </div>

        {/* 🟣 Login / Signup Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-btn">
            Signup
          </Link>
        </div>

        {/* 💻 Desktop Button */}
        <Link to="/courses" className="nav-btn desktop-btn">
          Start Learning
        </Link>

        {/* 🍔 Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div
        className="tutorials-btn-container"
        onMouseEnter={() => setShowTutorials(true)}
        onMouseLeave={() => setShowTutorials(false)}
      >
        <button className="tutorials-btn" onClick={handleToggle}>
          Tutorials <span className="dropdown-arrow">▼</span>
        </button>

        {showTutorials && (
          <div className="tutorials-popup">
            {tutorials.map((tut, index) => (
              <div className="tutorial-card" key={index}>
                {tut}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
