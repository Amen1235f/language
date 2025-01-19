import React, { useState, useEffect } from "react";
import './Work.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { Link } from "react-router-dom";

const Work = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({
    "2025-01-01": ["Write essay on nature", "Learn new vocabulary"],
    "2025-01-02": ["Practice French pronunciation", "Complete exercise on verbs"],
    "2025-01-05": ["Work on React project"],
    "2025-01-10": ["Complete assignment on CSS"],
  });

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const generateDays = () => {
    let days = [];
    for (let i = 1; i <= 31; i++) {
      const day = i < 10 ? `2025-01-0${i}` : `2025-01-${i}`;
      days.push(day);
    }
    return days;
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const getRandomColor = () => {
    const colors = ['#ff9f9f', '#9fffd3', '#ffdd57', '#ab9eff', '#9fd0ff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="calendar-wrapper">
      <div className="carde" data-aos="fade-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div className="carde__content">
          <p className="carde__title">Task of the Day</p>
          <p className="carde__description">
            Écrire un paragraphe sur le sujet de votre choix. Utilisez des exemples et assurez-vous d'inclure une introduction, un développement, et une conclusion. Cela peut être un essai ou un résumé de vos apprentissages.
          </p>
        </div>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3%",
        alignItems: "center",
      }} data-aos="fade-up">
        <textarea
          style={{
            width: "70%",
            maxWidth: "800px",
            height: "100px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            resize: "none",
            outline: "none",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
          placeholder="Type your message here..."
        />
      </div>
      <div className="card" data-aos="fade-right">
        <a className="card1" href="#">
          <p>Mots clés</p>
          <p className="small">
            <span style={{ color: "red" }}>Équité::</span>
            Signification : Traitement juste pour tous. Exemple : L'équité dans la classe signifie que chaque élève a les mêmes chances.<br />
            <span style={{ color: "red" }}>Concentration::</span>
            Signification : Porter son attention sur une tâche sans se laisser distraire. Exemple : Pour bien étudier, il faut beaucoup de concentration..
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
      <button
        className="btn-31"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "18%",
          marginLeft: "43%",
        }}
        data-aos="zoom-in"
      >
        <span className="text-container">
          <span className="text">submit</span>
        </span>
      </button>
      <div style={{ marginRight: "89%", marginTop: "-150px" }} data-aos="zoom-in">
        <Link to="/videocall">
          <span className="box">Hover!</span>
        </Link>
      </div>
      <div style={{ marginTop: "0px" }}>
        <Link to="/ex">
          <span
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "5px",
              fontSize: "16px",
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s",
              marginTop: "0px",
              left: "20px",
              top: "-45px", 
              position: "relative",
              boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
              transform: "scale(1)", 
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)"; 
              e.currentTarget.style.boxShadow = "0px 12px 16px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.boxShadow = "0px 8px 12px rgba(0, 0, 0, 0.2)"; 
            }}
            
          >
            Tester votre niveau
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Work;
