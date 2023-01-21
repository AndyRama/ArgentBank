import axios from 'axios'
import { loginUrl } from '../../utils/apiUrls'
import { loginSucess, loginFailure } from '../actions/authAction'
import {
  setValueToSessionStorage,
  setValueToLocalStorage,
} from '../../utils/store'

export function Login(email, password, remenberMe) {
  return (dispatch) => {
    axios
      .post(loginUrl, { email, password })
      .then((response) => {
        dispatch(loginSucess(response.data.body))
        if (remenberMe) {
          setValueToLocalStorage('TOKEN', response.data.body.token)
          setValueToLocalStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.firstName}`
          )
        }
        if (!remenberMe) {
          setValueToSessionStorage('TOKEN', response.data.body.token)
          setValueToLocalStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.lastName}`
          )
        }
        Window.location.replace('/profil')
      })
      .catch((error) => {
        dispatch(loginFailure(error.message))
      })
  }
}
