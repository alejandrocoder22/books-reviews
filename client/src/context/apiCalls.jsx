import { API_URL } from '../../config'
import { LoginFailure, LoginStart, LoginSuccess } from './AuthActions'

export const handleLogin = async (user, dispatch, setErrorMsg, e) => {
  e.preventDefault()

  dispatch(LoginStart)

  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  }

  )
  const data = await response.json()
  if (data.status === 'FAILED') {
    setErrorMsg(data.message)
    dispatch(LoginFailure(data))
  } else {
    dispatch(LoginSuccess(data))
  }
}
