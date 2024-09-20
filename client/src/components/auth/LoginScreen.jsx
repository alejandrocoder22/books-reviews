import { useContext, useState } from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { handleLogin } from '../../context/apiCalls'
import useSeo from '../../hooks/useSeo'

const LoginScreen = () => {
  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = values
  const { isFetching, dispatch } = useContext(AuthContext)
  const [errorMsg, setErrorMsg] = useState('')

  useSeo({
    title: 'Login'
  })

  return (
    <form onSubmit={(e) => handleLogin({ username, password }, dispatch, setErrorMsg, e)} className='auth-container'>
      <div className='auth-container__wrapper'>
        {errorMsg && <div className='auth-container__error-message'>{errorMsg}</div>}
        <label className='auth-container__label'>Username</label>
        <input className='auth-container__input' onChange={handleInputChange} required autoComplete='off' name='username' value={username} />
        <label className='auth-container__label'>Password</label>
        <input className='auth-container__input' type='password' onChange={handleInputChange} required autoComplete='off' name='password' value={password} />
        <button className='auth-container__button' disabled={isFetching}>Login</button>
        <p className='auth-container__p'>Not having an account? <Link to='/register' className='auth-container__a'>Register Here</Link>
        </p>
      </div>
    </form>
  )
}

export default LoginScreen
