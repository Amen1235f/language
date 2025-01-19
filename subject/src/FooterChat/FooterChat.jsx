import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FooterChat.css";

const FooterChat = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with custom duration
  }, []);

  const wordOfTheDay = {
    word: "Arbre",
    meaning: "Un arbre est une grande plante avec un tronc, des branches et des feuilles.",
    example_sentence: "L'arbre dans le parc est très grand."
  };

  return (
    <div
      className="blockquote-wrapper"
      data-aos="fade-up" // AOS animation
    >
      <div
        className="blockquote"
        data-aos="zoom-in" // AOS animation
      >
        <h1>
          <span style={{ color: "#ffffff" }}>Word of the Day: </span>
          <span style={{ color: "#FFD700" }}>{wordOfTheDay.word}</span>
        </h1>

        <div
          className="content"
          data-aos="fade-left" // AOS animation
        >
          <h4><strong>Meaning:</strong> {wordOfTheDay.meaning}</h4>
          <p className="paragraph">
            <strong>Example Sentence:</strong> "{wordOfTheDay.example_sentence}"
          </p>
        </div>

        <footer
          data-aos="flip-up" // AOS animation
        >
          <h4>&mdash; Learn and Grow with Every Word</h4>
        </footer>
      </div>
    </div>
  );
};

export default FooterChat;
