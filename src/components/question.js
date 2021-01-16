import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, next, appendAnswer }) => {
  const [time, setTime] = useState(15);
  const [selectedOption, setSelectedOption] = useState('');

  const saveAnswer = useCallback((answer) => {
    appendAnswer({ "ques_id": question.id, "submitted_option": answer });
    next();
    setTime(15);
  }, [appendAnswer, next, question.id]);
  
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    saveAnswer(e.target.value);
  };

  useEffect(() => {
    let id;
    if (Number(time) > 0) id = setInterval(() => setTime(("0" + (time -1)).slice(-2)), 1000);
    if (Number(time) === 0) saveAnswer("");
    return () => clearInterval(id);
  }, [time, saveAnswer]);

  return (
    <>
      <p className='time-bar font-medium bg-white py-2 text-sm md:text-base'>
        Time Remaining 0:{time}/0:15 seconds
      </p>
      <div className="mt-10 md:mt-16 mx-2 md:mx-10 shadow bg-white">
        <div className="question">
          <h3 className="font-semibold text-xl md:text-2xl py-4 bg-themeGrey1 border-b-2 border-gray-400 px-2 md:px-4">{question.name}</h3>
        </div>
        {question.options.split(',').map((option, index) => (
          <label htmlFor={option} className={`answer-value-${index + 1} flex items-center cursor-pointer hover:bg-gray-100`} key={option}>
            <span className="bg-themeGrey2 p-4">
              <input type="radio" id={option} value={option} checked={selectedOption === option} onChange={(e)=> handleChange(e)}/>
            </span>
            <p className="px-4 py-4 w-full border-b-2 border-gray-400 mr-6 text-gray-600 text-xs md:text-sm font-medium">{option}</p>
          </label>
        ))}
      </div>
    </>
  )
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.string.isRequired,
    quiz: PropTypes.number.isRequired,
  }).isRequired,
  next: PropTypes.func.isRequired,
  appendAnswer: PropTypes.func.isRequired,
};

export default Question;