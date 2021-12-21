import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {loginSlice} from '../store/reducers/LoginSlice'
import { useDispatch } from 'react-redux'

export const Layout = () => {
  const dispatch = useDispatch()
  const {changeAuth, changeRole} = loginSlice.actions

  return (
    <>
      <header>
        <nav>
          <Link to='/'>user</Link>
          <Link to='admin'>admin</Link>
          <Link to='login'>login</Link>
          <input type="button" value="Login"  onClick={() => dispatch(changeAuth(true))}/>
          <input type="button" value="Logout"  onClick={() => dispatch(changeAuth(false))}/>
          <input type="button" value="userRole"  onClick={() => dispatch(changeRole('user'))}/>
          <input type="button" value="adminRole"  onClick={() => dispatch(changeRole('admin'))}/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
