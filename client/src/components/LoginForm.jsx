import React from 'react'
import { useSelector } from 'react-redux'

export const LoginForm = ({ setMode }) => {
    const {isError, errorMessage} = useSelector(state => state.loginReducer)

    return (
        <div className='form'>
            <div className="form__header">
                <p>Login</p>
            </div>
            <div className="form__body">
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                {isError && <p className='error'>{errorMessage}</p>}
            </div>
            <div className="form__footer">
                <p>Don't have an account?</p>
                <p className='link' onClick={() => setMode('register')}>Registration</p>
            </div>
        </div>
    )
}
