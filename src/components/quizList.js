import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const QuizList = ({ quizzes }) => {
  const history = useHistory();
  return (
    <div className="px-6">
      {quizzes.map((quiz, index) => (
          <div className="w-full px-6 pt-6 pb-10 bg-white mb-8" key={quiz.id}>
            <div className="flex justify-between items-center flex-wrap border-b-2 border-themeGrey2 py-3">
              <h3 className={`quiz-list-${index + 1} font-medium text-lg md:text-2xl`}>{quiz.name}</h3>
              <button
                type="/button"
                className={`start-quiz-${index + 1} bg-themeGreen hover:bg-white py-2 px-4 text-white hover:text-themeGreen font-medium text-sm md:text-lg rounded shadow-lg`}
                onClick={() => history.push(`quiz/${quiz.id}`)}
              >
                Start
              </button>
            </div>
            <p className="font-light md:font-normal text-sm md:text-base lg:text-lg py-2">{quiz.description}</p>
          </div>
        ))}
    </div>
  )
};

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired,
};

export default QuizList;