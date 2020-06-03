import {
  getQuestions,
  saveQuestion,
  saveAnswer
} from '../utils/api'
import {
  ADD_QUESTION,
  ADD_ANSWER,
  RECEIVE_QUESTIONS
} from './types'
import {
  userAddQuestion,
  userAddAnswer
} from './users'
import {
  setLoading,
  resetLoading
} from './loading'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(setLoading())
    const { authedUser: author } = getState()
    return saveQuestion({
      author,
      optionOneText,
      optionTwoText
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(userAddQuestion(author, question.id))
        dispatch(resetLoading())
      })
  }
}

function addAnswer (info) {
  return {
    type: ADD_ANSWER,
    ...info
  }
}

export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    dispatch(setLoading())
    const { authedUser } = getState()
    const info = {
      authedUser,
      qid,
      answer
    }
    return saveAnswer(info)
      .then(() => {
        dispatch(addAnswer(info))
        dispatch(userAddAnswer(authedUser, qid, answer))
        dispatch(resetLoading())
      })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleReceiveQuestions () {
  return (dispatch) => {
    dispatch(setLoading())
    return getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(resetLoading())
      })
  }
}
