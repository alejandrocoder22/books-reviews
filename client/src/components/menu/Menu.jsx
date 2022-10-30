import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/AuthActions'
import { AuthContext } from '../../context/AuthContext'
import { BiLogOut } from 'react-icons/bi'
import { AiFillFileAdd } from 'react-icons/ai'

const Menu = () => {
  const { dispatch, user } = useContext(AuthContext)

  return (

    <nav className='menu '>
      <div className='menu__left '>

        <Link to='/' className='menu__a'>
          <div className='menu__a-container'>
            <span>See Reviews</span>
          </div>
        </Link>
        <Link to='/addreview' className='menu__add-review-link'>
          <span>Add Review</span>
          <AiFillFileAdd className='menu__icons' />
        </Link>
      </div>

      <div className='menu__right'>
        {user && (
          <>
            <div className='menu__logged-user'>{user.username || ''}</div>
            <span>Log out</span>
            <button className='menu__logout-button' onClick={() => dispatch(logout())}><BiLogOut className='menu__logout-icon' /> </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Menu
