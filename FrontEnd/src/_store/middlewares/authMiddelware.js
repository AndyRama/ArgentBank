import axios from 'axios'
import { profileUrl } from '../../utils/apiUrls'
import { token } from '../../utils/storage'

/**
 * PUT NEW USER NAME in API
 * @param   {string}  firstName   [new user firstName]
 * @param   {string}  lastName    [new user lastName]
 * @returns
 */

function newProfile(firstName, lastName) {
  return () => {
    axios
      .put(
        profileUrl,
        { firstName, lastName },
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((reponse) => {})
  }
}
export default newProfile
