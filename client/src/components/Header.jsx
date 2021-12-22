import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSlice } from '../store/reducers/LoginSlice'
import logo from '../logo/logo.png'
import '../styles/Navigation.css'

export const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setAuth } = loginSlice.actions
  const { role, isAuth } = useSelector(state => state.loginReducer)

  return (
    <header>
      <div className="navigation">
        <div className="navigation__logo">
          <img src={logo} alt="logo" />
        </div>

        {isAuth &&
          <>

            {(role === 'admin' || role === 'moder') &&
              <div className="navigation__main-btns">
                <input type="button" value="Shop" onClick={() => navigate('/')} />
                <input type="button" value="Orders" onClick={() => navigate('/admin')} />
              </div>
            }

            <div className="navigation__aside-btns">
              <input type="button" value="Logout" onClick={() => dispatch(setAuth(false))} />
            </div>
          </>
        }

      </div>
    </header>
  )
}
