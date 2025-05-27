import { useState } from 'react';
import { questions } from './questions';
import './index.css';
import { Link } from 'react-router-dom';

export default function RightChoiceGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (isCorrect: boolean, index: number) => {
    setSelectedAnswer(index);
    
    setTimeout(() => {
      if (isCorrect) setScore(s => s + 100);
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(q => q + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 700);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="results">
          <h2>Игра завершена!</h2>
          <p>Ваш результат: {score} из {questions.length * 100} очков</p>
          <p>Правильных ответов: {score / 100} из {questions.length}</p>
          <Link to="/">Вернуться в меню</Link>
        </div>
      ) : (
        <div className="question-container">
          <div className="progress-bar">
            <div style={{ width: `${progress}%` }}></div>
          </div>
          <Link style={{ color: '#fff' }} to='/'>Вернуться назад</Link>
          <div className="question-header">
            <span>Вопрос {currentQuestion + 1}/{questions.length}</span>
            <span>Очки: {score}</span>
          </div>
          
          <div className="question-card">
            <h3>{questions[currentQuestion].question}</h3>
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.isCorrect, index)}
                  className={`option-button ${
                    selectedAnswer !== null 
                      ? option.isCorrect 
                        ? 'correct' 
                        : 'wrong'
                      : ''
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}