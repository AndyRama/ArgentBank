import axios from 'axios'
import { loginUrl } from '../../utils/apiUrls'
import { loginSucess, loginFailure } from '../actions/authAction'
import {
  setValueToSessionStorage,
  setValueToLocalStorage,
} from '../../utils/store'

export function login(email, password, remenberMe) {
  return (dispatch) => {
    axios
      .post(loginUrl, { email, password })
      .then((response) => {
        dispatch(loginSucess(response.data.body))

        if (remenberMe) {
          setValueToLocalStorage('TOKEN', response.data.body.token)
          setValueToLocalStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.lastName}`
          )
        }

        if (!remenberMe) {
          setValueToSessionStorage('TOKEN', response.data.body.token)
          setValueToSessionStorage(
            'USER',
            `${response.data.body.user.firstName} ${response.data.body.user.lastName}`
          )
        }
        window.location.replace('/profil')
      })
      .catch((error) => {
        dispatch(loginFailure(error.message))
      })
  }
}
