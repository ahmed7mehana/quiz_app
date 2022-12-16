import React, { useState } from "react";
import "./styles.css";
import questions from "./Questions";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const next = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const back = () => {
    const nextQuestion = currentQuestion - 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          {score > 16 ? (
            <h2>اشطر كتكوت </h2>
          ) : (
            <p>
              خير يا صديقي/تي حاول تاني صاحب شركه واتساب الشهيره اترفض في الاول
              من فيسبوك وبعد النجاح الكاسح كانو بيبوسو ايده عشان يقبل يشتروها
              منه ف حاول تاني يا صديقي لا تيأس
            </p>
          )}
          You scored {score} out of {questions.length}
          <button onClick={() => window.location.reload()}> Again...?</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="progress">
            {currentQuestion === 0 ? (
              <button onClick={next}> next</button>
            ) : (
              <>
                <button onClick={next}> next</button>
                <button onClick={back}> Back</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
