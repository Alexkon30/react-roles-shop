import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginSlice } from '../store/reducers/LoginSlice'
import { loginUser } from '../store/reducers/ActionCreators'
import '../styles/Form.css'
import '../styles/ErrorContainer.css'

export const LoginForm = ({ setMode }) => {
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.loginReducer)
    const { setError } = loginSlice.actions
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    return (
        <div className='form'>
            <div className="form__header">
                <p>Login</p>
            </div>
            <div className="form__body">
                <input type="text" placeholder='email'
                    value={loginInfo.email}
                    onChange={(e) => setLoginInfo(prevInfo => ({ ...prevInfo, email: e.target.value }))}
                />
                <input type="password" placeholder='password'
                    value={loginInfo.password}
                    onChange={(e) => setLoginInfo(prevInfo => ({ ...prevInfo, password: e.target.value }))}
                />
                {error &&
                    <div className='error__container'>
                        <p>{error}</p>
                        <i className="bi bi-x-circle-fill" onClick={() => dispatch(setError(''))}></i>
                    </div>}
                <input type="button" value="Login"
                    onClick={() => dispatch(loginUser(loginInfo))}
                />
            </div>
            <div className="form__footer">
                <p>Don't have an account?</p>
                <p className='link' onClick={() => setMode('register')}>Registration</p>
            </div>
        </div>
    )
}
