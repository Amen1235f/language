import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Feedback from "../Feedback/Feedback"; // Importing Feedback component
import "./VideoCall.css";

const VideoCall = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
    <Feedback />
    
    <div id="videoCall" data-aos="fade-in">
      <div className="contact-name" data-aos="fade-down">
        <h3>Partner Name</h3>
      </div>
      <img
        src="/avatar.jpg"
        alt=""
        style={{
          width: "300px",
          marginTop: "-1%",
          marginLeft: "250px",
          alignItems: "center",
          justifyContent: "center",
          gap: "3",
        }}
      />
      <div
        style={{
          marginTop: "-1%",
          marginLeft: "25%",
          backgroundColor: "white",
          width: "450px",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p
          style={{
            wordSpacing: "5px",
            fontWeight: "bolder",
            fontSize: "20px",
            textAlign: "center",
            color: "#4CAF50",
            marginBottom: "20px",
          }}
        >
          C'est génial ! mais on dit
        </p>
        <p
          style={{
            wordSpacing: "5px",
            fontWeight: "bolder",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          <span style={{ color: "green" }}>Je</span>{" "}
          <span style={{ color: "green" }}>suis allé au cinéma.</span>
        </p>
      </div>

      <video
        className="remote-stream"
        autoPlay
        muted
        data-aos="zoom-in"
        data-aos-delay="200"
      ></video>

     

      <div className="controls" data-aos="fade-up">
        <button className="call-end" data-aos="flip-left" data-aos-delay="600">
          <i className="material-icons md-48">call_end</i>
        </button>
      </div>
      <div
        style={{
          marginTop: "-73%",
          marginLeft: "25%",
          backgroundColor: "white",
          width: "450px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ wordSpacing: "5px", fontWeight: "bolder", fontSize: "800",marginTop:"-30px" }}>
          <span style={{ color: "green" }}>Je</span>{" "}
          <span style={{ color: "red" }}>moi</span>{" "}
          <span style={{ color: "green" }}>suis allé au cinéma.</span>
        </p>
      </div>
      <img src="/boy.jpg" alt="" style={{marginLeft:"230px",width:"190px",alignItems:"center",justifyContent:"center"}}/>

      {/* Feedback Component Integration */}
      </div>
    </div>
  );
};

export default VideoCall;
