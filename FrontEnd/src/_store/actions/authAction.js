import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './_types'
export const loginSucess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logoutSucess = (user) => ({
  type: LOGOUT_SUCCESS,
})
