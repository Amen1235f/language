import React, { useState, useEffect } from "react";
import './Exercises.css'
const Exercises = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [currentExercise, setCurrentExercise] = useState("conjugation");

  const practicalExercises = [
    {
      type: "conjugation",
      sentence: "Je _____ (manger) une pomme.",
      correctAnswer: "mange",
      task: "Conjugate the verb correctly in the present tense.",
      hint: "It's the first person singular in the present tense.",
    },
    {
      type: "translation",
      sentence: "Je suis _____ français.",
      correctAnswer: "apprenant",
      task: "Translate the sentence to English.",
      hint: "It means someone who is learning.",
    },
    {
      type: "question",
      sentence: "Comment ça va?",
      correctAnswer: "Ça va bien, merci.",
      task: "Respond to this question as if you were having a real conversation.",
    },
    {
      type: "image-choice",
      sentence: "Choose the correct translation of the word 'chat':",
      choices: ["Cat", "Dog", "Horse"],
      correctAnswer: "Cat",
      task: "Choose the correct image or word translation.",
      hint: "Think of the animal that says 'meow'.",
    },
    {
      type: "timed-challenge",
      sentence: "What is 5 + 7 in French?",
      correctAnswer: "douze",
      task: "Answer as quickly as possible!",
      hint: "It's the number after eleven.",
    },
  ];

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "fr-FR";
  recognition.continuous = false;
  recognition.interimResults = false;

  useEffect(() => {
    return () => {
      recognition.stop();
    };
  }, []);

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = (exercise) => {
    if (userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const startListening = () => {
    if (!isListening) {
      recognition.start();
      setIsListening(true);
    }
  };

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    setUserAnswer(result);
    const currentExerciseDetails = practicalExercises.find(
      (exercise) => exercise.type === currentExercise
    );
    checkAnswer(currentExerciseDetails);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    setIsListening(false);
  };

  const switchToNextExercise = () => {
    const currentIndex = practicalExercises.findIndex(
      (exercise) => exercise.type === currentExercise
    );
    const nextExercise = practicalExercises[(currentIndex + 1) % practicalExercises.length];
    setCurrentExercise(nextExercise.type);
    setUserAnswer("");
    setIsCorrect(null);
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div className="exercises-container">
      <h2>Practical French Exercises</h2>

      {practicalExercises.map((exercise) => {
        if (exercise.type === currentExercise) {
          return (
            <div className="exercise" key={exercise.type}>
              <h3>{exercise.task}</h3>
              <p>{exercise.sentence}</p>
              
              {exercise.type === "conjugation" || exercise.type === "translation" || exercise.type === "question" ? (
                <>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    placeholder="Votre réponse"
                  />
                  <button onClick={() => checkAnswer(exercise)}>Vérifier</button>
                </>
              ) : null}

              {exercise.type === "image-choice" ? (
                <div>
                  {exercise.choices.map((choice, index) => (
                    <button key={index} onClick={() => setUserAnswer(choice)}>
                      {choice}
                    </button>
                  ))}
                  <button onClick={() => checkAnswer(exercise)}>Vérifier</button>
                </div>
              ) : null}

              {exercise.type === "timed-challenge" ? (
                <div>
                  <button onClick={() => checkAnswer(exercise)}>Vérifier</button>
                </div>
              ) : null}

              <button onClick={startListening} disabled={isListening}>
                Répondez par la voix
              </button>
              {isCorrect !== null && (
                <p style={{ color: isCorrect ? "green" : "red" }}>
                  {isCorrect ? "Correct!" : "Incorrect, essayez encore!"}
                </p>
              )}
              <button onClick={switchToNextExercise}>Passer à l'exercice suivant</button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Exercises;
