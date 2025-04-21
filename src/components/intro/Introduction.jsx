import React from 'react';
import backgroundImage from '../../assets/bg.jpg';
import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import '../../styles/button.css';

const Introduction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="intro-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div className="intro-overlay">
       <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          GoTicket
        </h1>
        <p className="intro-tagline">Your number one movie destination.</p>
        <button className="btn-custom" onClick={handleClick}>
          Watch Movies
        </button>
      </div>
    </div>
  );
};

export default Introduction;

