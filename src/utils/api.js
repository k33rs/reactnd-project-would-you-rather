import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'

export function getQuestions () {
  return _getQuestions()
}

export function getUsers () {
  return _getUsers()
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveAnswer (info) {
  return _saveQuestionAnswer(info)
}
