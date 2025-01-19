import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-container">
  <h3>Retour sur la syntaxe</h3>
  <div className="feedback-item">
    <p><strong>Problème :</strong> Mauvaise utilisation du mot "moi" dans la phrase.</p>
    <p><strong>Explication :</strong> La phrase correcte devrait être "Je suis allé au cinéma" au lieu de "Moi suis allé au cinéma". "Moi" est utilisé incorrectement comme sujet. Le pronom sujet correct est "Je".</p>
    <p><strong>Correction :</strong> <span style={{ color: "green" }}>Je</span> suis allé au cinéma.</p>
    <p><strong>Astuce :</strong> Utilisez toujours "Je" comme sujet lorsque vous vous référez à vous-même dans les phrases en français.</p>
  </div>

  <div className="feedback-item">
    <p><strong>Problème :</strong> Le mot "suisé" n'existe pas en français.</p>
    <p><strong>Explication :</strong> "Suisé" semble être une faute de frappe ou un verbe mal formé. La forme correcte est "je suis" (je suis) pour exprimer une action.</p>
    <p><strong>Correction :</strong> <span style={{ color: "green" }}>Je suis</span> allé au cinéma.</p>
    <p><strong>Astuce :</strong> Vérifiez toujours les formes verbales lorsque vous conjuguez en français pour garantir la justesse.</p>
  </div>
</div>

  );
};

export default Feedback;
