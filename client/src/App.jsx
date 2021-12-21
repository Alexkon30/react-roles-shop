import React from 'react'
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'
import { AdminPage } from './pages/AdminPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { useSelector } from 'react-redux'
import { Layout } from './pages/Layout'


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RequireAuth><UserPage /></RequireAuth>} />
          <Route path='login' element={<CheckAuth><LoginPage /></CheckAuth>} />
          <Route path='admin' element={<RequireRoot><AdminPage /></RequireRoot>} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}



function RequireAuth({ children }) {
  const { isAuth } = useSelector(state => state.loginReducer)
  if (!isAuth) {
    return <Navigate to="/login"/>;
  }
  return children;
}

function RequireRoot({ children }) {
  const { role, isAuth } = useSelector(state => state.loginReducer)
  if ((role === 'admin' || role === 'moder') && isAuth) {
    return children;
  }
  return <Navigate to="/"/>;
}

function CheckAuth({children}) {
  const { isAuth } = useSelector(state => state.loginReducer)
  if (isAuth) {
    return <Navigate to="/"/>;
  }
  return children
}
