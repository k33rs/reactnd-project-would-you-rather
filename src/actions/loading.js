import {
  SET_LOADING,
  RESET_LOADING
} from './types'

export function setLoading () {
  return {
    type: SET_LOADING
  }
}

export function resetLoading () {
  return {
    type: RESET_LOADING
  }
}
