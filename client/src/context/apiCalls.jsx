import { LoginFailure, LoginStart, LoginSuccess } from './AuthActions'

export const handleLogin = async (user, dispatch, setErrorMsg, e) => {
  e.preventDefault()

  dispatch(LoginStart)

  const response = await fetch('http://localhost:3003/auth/login', {
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
  }

  if (data.auth === true) {
    dispatch(LoginSuccess(data))
  }
}
