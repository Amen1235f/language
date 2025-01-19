import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import './Interface.css';
import FooterChat from "../FooterChat/FooterChat";

const Interface = () => {
  return (
    <div className="interface-container">
      <div className="context">
        <h1>Amen's Solution</h1>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="button-container">
        {/* Link component wraps the button to enable navigation */}
        <Link to="/work">
          <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Push Me</span>
          </button>
        </Link>
      </div>

      <FooterChat />
    </div>
  );
}

export default Interface;
