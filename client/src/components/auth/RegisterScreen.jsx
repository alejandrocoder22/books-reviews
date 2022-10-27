import React from 'react'
import useForm from '../../hooks/useForm'

const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = values

  const handleRegister = (e) => {
    e.preventDefault()
    fetch('http://localhost:3003/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
  }

  return (
    <form onSubmit={(e) => handleRegister(e)} className='auth-container'>
      <div className='auth-container__wrapper'>
        <label className='auth-container__label'>Username</label>
        <input className='auth-container__input' onChange={handleInputChange} required autoComplete='off' name='username' value={username} />
        <label className='auth-container__label'>Password</label>
        <input className='auth-container__input' onChange={handleInputChange} required type='password' autoComplete='off' name='password' value={password} />
        <button className='auth-container__button'>Register</button>
      </div>
    </form>
  )
}

export default RegisterScreen
