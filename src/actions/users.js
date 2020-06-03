import {
  USER_ADD_QUESTION,
  USER_ADD_ANSWER,
  RECEIVE_USERS
} from './types'
import {
  setLoading,
  resetLoading
} from './loading'
import { getUsers } from '../utils/api'

export function userAddQuestion (uid, qid) {
  return {
    type: USER_ADD_QUESTION,
    uid,
    qid
  }
}

export function userAddAnswer (uid, qid, answer) {
  return {
    type: USER_ADD_ANSWER,
    uid,
    qid,
    answer
  }
}

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleReceiveUsers () {
  return (dispatch) => {
    dispatch(setLoading())
    return getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(resetLoading())
      })
  }
}
