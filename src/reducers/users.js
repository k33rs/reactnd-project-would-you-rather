import {
  USER_ADD_QUESTION,
  USER_ADD_ANSWER,
  RECEIVE_USERS
} from '../actions/types'

export default function users (state = {}, action) {
  switch (action.type) {
    case USER_ADD_QUESTION: {
      const { uid, qid } = action
      const oldUser = state[uid]
      const { questions: oldQuestions } = oldUser
      return {
        ...state,
        [uid]: {
          ...oldUser,
          questions: [...oldQuestions, qid]
        }
      }
    }
    case USER_ADD_ANSWER: {
      const { uid, qid, answer } = action
      const oldUser = state[uid]
      const { answers: oldAnswers } = oldUser
      return {
        ...state,
        [uid]: {
          ...oldUser,
          answers: {
            ...oldAnswers,
            [qid]: answer
          }
        }
      }
    }
    case RECEIVE_USERS: {
      const { users } = action
      return {
        ...state,
        ...users
      }
    }
    default:
      return state
  }
}
