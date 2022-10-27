import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../context/AuthActions'
import { AuthContext } from '../../context/AuthContext'
import { BiLogOut, BiShow } from 'react-icons/bi'
import { AiFillFileAdd } from 'react-icons/ai'
const Sidebar = () => {
  const { dispatch, user } = useContext(AuthContext)

  return (

    <aside className='sidebar'>
      <div className='sidebar__logout-container'>
        {user && (
          <>
            <button className='sidebar__logout-button' onClick={() => dispatch(logout())}><BiLogOut className='sidebar__logout-icon' /> </button>
            <div className='sidebar__logged-user'>{user.username || ''}</div>
          </>
        )}

      </div>
      <nav className='sidebar__menu'>
        <Link to='/addreview' className='sidebar__a'>
          <div className='sidebar__a-container'>
            <span>Add Review</span>
            <AiFillFileAdd className='sidebar__icons' />
          </div>
        </Link>
        <Link to='/' className='sidebar__a'>
          <div className='sidebar__a-container'>
            <span>See Reviews</span>
            <BiShow className='sidebar__icons' />
          </div>
        </Link>

      </nav>

    </aside>
  )
}

export default Sidebar
