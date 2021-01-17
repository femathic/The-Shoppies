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
  const fetchMovies = (payload) => {
    dispatch({
      type: 'FETCH_MOVIES',
      payload,
    });
  };

  const addError = (err) => {
    dispatch({
      type: 'ADD_ERROR',
      payload: err,
    });
  };
  const removeError = () => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
  };

  const addNominated = (movie) => {
    dispatch({
      type: 'GET_QUIZZES',
      payload: movie,
    });
  };
  const removeNominated = (id) => {
    dispatch({
      type: 'GET_QUIZZES',
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        error: state.error,
        fetchMovies,
        addNominated,
        removeNominated,
        addError,
        removeError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
