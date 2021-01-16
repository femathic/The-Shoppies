import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  movies: [],
  error: '',
  nominated: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addQuizQuestions = (payload) => {
    dispatch({
      type: 'ADD_QUIZ_QUESTIONS',
      payload,
    });
  };

  const addError = (err) => {
    dispatch({
      type: 'ADD_ERROR',
      payload: err,
    });
  };

  const getQuizzes = (quizzes) => {
    dispatch({
      type: 'GET_QUIZZES',
      payload: quizzes,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        quizzes: state.quizzes,
        error: state.error,
        addQuizQuestions,
        getQuizzes,
        addError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
