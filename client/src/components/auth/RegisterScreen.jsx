import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { API_URL } from '../../../config'
import { AuthContext } from '../../context/AuthContext'
import { LoginFailure, LoginSuccess } from '../../context/AuthActions'

const RegisterScreen = () => {
  const navigate = useNavigate()
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })
  const [confirmMessage, setConfirmMessage] = useState('')
  const { isFetching, dispatch } = useContext(AuthContext)
  const { username, password } = values

  const handleRegister = (e) => {
    e.preventDefault()
    fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          dispatch(LoginSuccess(data))
          navigate('/')
        } else {
          dispatch(LoginFailure(data.message))
        }
      })
  }

  return (
    <form onSubmit={(e) => handleRegister(e)} className='auth-container'>
      <div className='auth-container__wrapper'>
        <label className='auth-container__label'>Username</label>
        <input className='auth-container__input' onChange={handleInputChange} required autoComplete='off' name='username' value={username} />
        <label className='auth-container__label'>Password</label>
        <input className='auth-container__input' onChange={handleInputChange} required type='password' autoComplete='off' name='password' value={password} />
        {confirmMessage && <div className='auth-container__error-message'>{confirmMessage}</div>}
        <button className='auth-container__button'>Register</button>
      </div>
    </form>
  )
}

export default RegisterScreen
