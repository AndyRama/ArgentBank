import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/_types'
import { user } from '../../utils/store'

const initialState = user
  ? {
      isAuth: true,
      user,
      firstName: user.split(' ')[0],
      lastName: user.split(' '),
    }
  : { isAuth: false, user: null, firstName: '', lastName: '' }

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload.user,
      }
    default:
      return state
  }
}
