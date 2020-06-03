import {
  SET_LOADING,
  RESET_LOADING
} from '../actions/types'

export default function loading (state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return true
    case RESET_LOADING:
      return false
    default:
      return state
  }
}
