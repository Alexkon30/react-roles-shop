import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../store/reducers/ActionCreators'
import { loginSlice } from '../store/reducers/LoginSlice'

export const RegisterForm = ({ setMode }) => {
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.loginReducer)
    const {setError} = loginSlice.actions
    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmedPassword: ''
    })

    return (
        <div className='form'>
            <div className="form__header">
                <p>Registration</p>
            </div>
            <div className="form__body">
                <input type="text" placeholder='username'
                    value={registerInfo.username}
                    onChange={(e) => setRegisterInfo(prevInfo => ({ ...prevInfo, username: e.target.value }))}
                />
                <input type="text" placeholder='email'
                    value={registerInfo.email}
                    onChange={(e) => setRegisterInfo(prevInfo => ({ ...prevInfo, email: e.target.value }))}
                />
                <input type="password" placeholder='password'
                    value={registerInfo.password}
                    onChange={(e) => setRegisterInfo(prevInfo => ({ ...prevInfo, password: e.target.value }))}
                />
                <input type="password" placeholder='confirm password'
                    value={registerInfo.confirmedPassword}
                    onChange={(e) => setRegisterInfo(prevInfo => ({ ...prevInfo, confirmedPassword: e.target.value }))}
                />
                {error && 
                <div className='error__container'>
                    <p>{error}</p>
                <i className="bi bi-x-circle-fill" onClick={() => dispatch(setError(''))}></i>
                </div>}
                <input type="button" value="Register"
                    onClick={() => {dispatch(registerUser(registerInfo)) }}
                />
            </div>
            <div className="form__footer">
                <p>Already have an account?</p>
                <p className='link' onClick={() => setMode('login')}>Login</p>
            </div>
        </div>
    )
}
