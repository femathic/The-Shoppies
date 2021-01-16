import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './progressBar';
import Question from './question';
import Result from '../pages/Result';

const QuestionList = ({ quiz }) => {
  const [showResult, setShowResult] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState({"quiz_id": quiz.id, "mappings": []});
  const next = () => {
    if (questionNumber !== quiz.questions.length - 1) {
      setQuestionNumber(questionNumber + 1)
    } 
  }
  const appendAnswer = (answer) => {
    const newChosenAnswers = { ...chosenAnswers };
    newChosenAnswers.mappings.push(answer);
    setChosenAnswers(newChosenAnswers);
  };

  useEffect(() => {
    if (chosenAnswers.mappings.length === quiz.questions.length) {
      setShowResult(true);
    }
  }, [chosenAnswers, quiz.questions.length])

  return (
    <>
      <h1 className="font-semibold text-2xl md:text-4xl text-center text-white bg-themeGrey3 py-4">{quiz.name}</h1>
      {!showResult &&
        <>
          <div className='bg-white pt-4 pb-2'>
            <ProgressBar percentage={(questionNumber/quiz.questions.length) * 100} />
          </div>
          <Question question={quiz.questions[questionNumber]} next={() => next()} appendAnswer={appendAnswer} />
        </>   
      }
      {showResult &&
        <Result chosenAnswers={chosenAnswers} questions={quiz.questions}/>
      }
    </>
  )
};

QuestionList.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        options: PropTypes.string.isRequired,
        quiz: PropTypes.number.isRequired,
      }).isRequired,
    ),
  }).isRequired
};
export default QuestionList;