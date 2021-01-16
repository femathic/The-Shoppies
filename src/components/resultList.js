import React from 'react';
import PropTypes from 'prop-types';

const ResultList = ({ results, questions }) => (
  <div className="px-6">
    <h1 className="score font-bold text-2xl md:text-4xl text-center pb-2 pt-8">Your score is {results.score}</h1>
    <p className="font-semibold text-sm md:text-base py-4 bg-themeGrey1 border-b-2 border-gray-400 px-2 md:px-4">Answers</p>
    <div className="bg-white">
      {results.questions.map((result, index) => (
        <div className="w-full px-6 py-6 bg-white border-t-2 border-gray-400" key={result.ques_id}>
          <p className={`question-${index + 1} font-light md:font-normal text-sm md:text-base lg:text-lg py-1`}>
            Question: {questions.filter((question) => question.id === result.ques_id)[0].name}
          </p>
          <p className={`submitted-answer-${index + 1} font-light md:font-normal text-sm md:text-base lg:text-lg py-1`}>Your answer: {result.submitted_option}</p>
          <p className={`correct-answer-${index + 1} font-light md:font-normal text-sm md:text-base lg:text-lg py-1`}>Correct answer: {result.correct_option}</p>
        </div>
      ))}
    </div>
  </div>
);

ResultList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      options: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      quiz: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  results: PropTypes.shape({
    score: PropTypes.number.isRequired,
    total_score: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        ques_id: PropTypes.number.isRequired,
        correct_option: PropTypes.string.isRequired,
        submitted_option: PropTypes.string,
      }).isRequired
    ).isRequired,
  }).isRequired
};

export default ResultList;