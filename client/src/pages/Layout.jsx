import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {loginSlice} from '../store/reducers/LoginSlice'
import { useDispatch } from 'react-redux'
import { Footer } from '../components/Footer'

export const Layout = () => {
  const dispatch = useDispatch()
  const {setAuth, setRole} = loginSlice.actions

  return (
    <>
      <header>
        <nav>
          <Link to='/'>user</Link>
          <Link to='admin'>admin</Link>
          <Link to='login'>login</Link>
          <input type="button" value="Login"  onClick={() => dispatch(setAuth(true))}/>
          <input type="button" value="Logout"  onClick={() => dispatch(setAuth(false))}/>
          <input type="button" value="userRole"  onClick={() => dispatch(setRole('user'))}/>
          <input type="button" value="adminRole"  onClick={() => dispatch(setRole('admin'))}/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}
