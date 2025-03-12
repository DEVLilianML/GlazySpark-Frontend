import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css"; 

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation & scrolling
  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll after navigation
      navigate("/", { replace: false });

      // Delay scrolling until after navigation completes
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Small delay to ensure homepage loads
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header">
      <div>
        <img className="logo" src="/logo-now.webp" alt="GlazySpark logo" loading="lazy" />
      </div>
      <div className="container">
        <ul>
          <li><a href="/" onClick={() => navigate("/")}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavigation("services"); }}>Services</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}>About Us</a></li>
          <li><a href="#connect" onClick={(e) => { e.preventDefault(); handleNavigation("connect"); }}>Contact</a></li>
        </ul>
          {/* Blog Button Fix */}
          <button className="blog-button" onClick={(e) => { 
          e.preventDefault();
          handleNavigation("blog-section");
        }}>
          Blog
        </button>
        <button className="project-button">
          <a href="#contact">Start a Project</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
