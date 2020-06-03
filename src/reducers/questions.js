import {
  ADD_QUESTION,
  ADD_ANSWER,
  RECEIVE_QUESTIONS
} from '../actions/types'

export default function questions (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const { question } = action
      const { id } = question
      return {
        ...state,
        [id]: question
      }
    }
    case ADD_ANSWER: {
      const {
        authedUser,
        answer,
        qid
      } = action
      const oldQuestion = state[qid]
      const oldAnswer = oldQuestion[answer]
      const { votes: oldVotes } = oldAnswer
      return {
        ...state,
        [qid]: {
          ...oldQuestion,
          [answer]: {
            ...oldAnswer,
            votes: [...oldVotes, authedUser]
          }
        }
      }
    }
    case RECEIVE_QUESTIONS: {
      const { questions } = action
      return {
        ...state,
        ...questions
      }
    }
    default:
      return state
  }
}
