import { useContext } from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddReviewScreen from '../components/addReview/AddReviewScreen'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import { AuthContext } from '../context/AuthContext'
import Menu from '../components/menu/Menu'
import { API_URL } from '../../config'
console.log(import.meta.env)
const AppRouter = () => {
  const { user } = useContext(AuthContext)
  console.log(API_URL)
  return (

    <BrowserRouter>
      <main>
        <div className='main-content wrapper'>
          <Menu />
          <Routes>
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={user ? <ReviewsGridScreen /> : <LoginScreen />}>  </Route>
            <Route path='/addreview' element={user ? <AddReviewScreen /> : <LoginScreen />} />
            <Route path='/review/:id' element={user ? <ReviewScreen /> : <LoginScreen />} />
            <Route path='/' element={user ? <ReviewsGridScreen /> : <LoginScreen />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>

  )
}

export default AppRouter
