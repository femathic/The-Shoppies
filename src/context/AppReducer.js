export default (state, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case 'ADD_NOMINATED':
      return {
        ...state,
        nominated: [...state.nominated, action.payload],
      };
    case 'REMOVE_NOMINATED':
      return {
        ...state,
        nominated: state.nominate.filter((movie) => movie.id !== action.payload),
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
