import {START, FINISH, RENEW} from './types'

const initialState = {
  step: "new"
};

export const workflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return { ...state, step: "active" };
    case FINISH:
      return { ...state, step: "finished" };
    case RENEW:
      return { ...state, step: "new" };
    default: return state;
  }
};
