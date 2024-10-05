import React from "react";
import he from "he";

const Questionspage = () => {
  const [getQuestions, setGetQuestions] = React.useState([]);
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [checkCorrectAnswer, setCheckCorrectAnswer] = React.useState(false);

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setGetQuestions(data.results);
      });
  }, []);

  const handleChange = (questionIndex, answer) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answer,
    }));
  };

  const checkAnswer = () => {
    setCheckCorrectAnswer(true);
  };

  const startAgain = () => {
    setGetQuestions([]);
    setSelectedAnswers({});
    setCheckCorrectAnswer(false);
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setGetQuestions(data.results);
      });
  };

  return (
    <div className="parent-body">
      {getQuestions.map((question, index) => {
        const answers = [
          ...question.incorrect_answers,
          question.correct_answer,
        ].sort(); 

        return (
          <div className="question-body" key={index}>
            <h3>{he.decode(question.question)}</h3>
            <form>
              {answers.map((answer, i) => {
                const decodedAnswer = he.decode(answer);
                const isSelected = selectedAnswers[index] === decodedAnswer;
                const isCorrect =
                  decodedAnswer === he.decode(question.correct_answer);

                let answerClass = "";
                if (checkCorrectAnswer) {
                  if (isCorrect) {
                    answerClass = "correct-answer"; 
                  } else if (isSelected && !isCorrect) {
                    answerClass = "incorrect-answer"; 
                  }
                }

                return (
                  <div key={i} className={`multiple-choice ${answerClass}`}>
                    <input
                      type="radio"
                      id={`question-${index}-answer-${i}`}
                      name={`question-${index}`}
                      value={decodedAnswer}
                      onChange={() => handleChange(index, decodedAnswer)}
                      disabled={checkCorrectAnswer}
                      checked={isSelected}
                    />
                    <label htmlFor={`question-${index}-answer-${i}`}>
                      {decodedAnswer}
                    </label>
                  </div>
                );
              })}
            </form>
          </div>
        );
      })}
      <button
        className="answer-btn"
        onClick={checkCorrectAnswer ? startAgain : checkAnswer}
      >
        {checkCorrectAnswer ? "Start Again" : "Check Answers"}
      </button>
    </div>
  );
};

export default Questionspage;
