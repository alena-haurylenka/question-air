import {combineReducers} from 'redux'
import {workflowReducer} from './workflowReducer'
import {answersReducer} from './answersReducer'

export const rootReducer = combineReducers({
  workflow: workflowReducer,
  answers: answersReducer
});
