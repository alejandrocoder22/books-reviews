import { useContext } from 'react'
import ReviewsGridScreen from '../components/reviewsHome/ReviewsGridScreen'
import ReviewScreen from '../components/singleReview/ReviewScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddReviewScreen from '../components/addReview/AddReviewScreen'
import Sidebar from '../components/sidebar/Sidebar'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import { AuthContext } from '../context/AuthContext'

const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (

    <BrowserRouter>
      <main>
        <div className='main-content'>
          <Sidebar />
          <Routes>
            <Route path='/login' element={user ? <ReviewsGridScreen /> : <LoginScreen />}>  </Route>
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/addreview' element={user ? <AddReviewScreen /> : <LoginScreen />} />
            <Route path='/review/:id' element={<ReviewScreen />} />
            <Route path='/' element={user ? <ReviewsGridScreen /> : <LoginScreen />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>

  )
}

export default AppRouter
