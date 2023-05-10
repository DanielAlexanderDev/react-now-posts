import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import './App.css'
import Header from './components/Header'
import Profile from './pages/Profile'
import Browse from './pages/Browse'
import { UserProvider } from './context/userContext'
import { Feed } from './pages/Feed'
import { About } from './pages/About'
import { Footer } from './components/Footer'
import { useAuth } from './hooks/useAuth'

function App() {
  const { userIsAuth } = useAuth()

  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={userIsAuth ? <Navigate to="/feed" /> : <Home />}
          />
          <Route path="/feed" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={userIsAuth ? <Navigate to={'/profile'} /> : <Login />}
          />
          <Route path="/explore" element={<Browse />} />
          <Route
            path="/register"
            element={userIsAuth ? <Navigate to={'/profile'} /> : <Register />}
          />
          <Route
            path="/profile"
            element={userIsAuth ? <Profile /> : <Navigate to={'/login'} />}
          />
          <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
