import {ADD_ANSWER, RESET_ANSWERS} from './types'

const initialState = {
  answers: []
};

export const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {...state, answers: state.answers.concat([action.answer])};
    case RESET_ANSWERS:
      return {...state, answers: []};
    default: return state
  }
};
