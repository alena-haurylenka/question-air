import {START, FINISH, RENEW, ADD_ANSWER, RESET_ANSWERS} from './types'

export function start() {
  return {
    type: START
  }
}

export function finish() {
  return {
    type: FINISH
  }
}

export function renew() {
  return {
    type: RENEW
  }
}

export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    payload: answer
  }
}

export function resetAnswers() {
  return {
    type: RESET_ANSWERS
  }
}
