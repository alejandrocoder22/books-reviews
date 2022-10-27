import { AuthContextProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter'
import '../styles/styles.scss'

const BookApp = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>

  )
}

export default BookApp
