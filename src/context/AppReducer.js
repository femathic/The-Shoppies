export default (state, action) => {
  switch (action.type) {
    case 'ADD_QUIZ_QUESTIONS':
      return {
        ...state,
        quizzes: state.quizzes.map((quiz) => {
          if (Number(quiz.id) === Number(action.payload.id)) {
            return { ...quiz, questions: action.payload.questions };
          }
          return quiz;
        }),
      };
    case 'GET_QUIZZES':
      return {
        ...state,
        quizzes: action.payload,
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
