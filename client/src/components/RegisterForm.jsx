import React from 'react'
import { useSelector } from 'react-redux'

export const RegisterForm = ({ setMode }) => {
const {isError, errorMessage} = useSelector(state => state.loginReducer)

    return (
        <div className='form'>
            <div className="form__header">
                <p>Registration</p>
            </div>
            <div className="form__body">
                <input type="text" placeholder='username' />
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="password" placeholder='confirm password' />
                {isError && <p className='error'>{errorMessage}</p>}
            </div>
            <div className="form__footer">
                <p>Already have an account?</p>
                <p className='link' onClick={() => setMode('login')}>Login</p>
            </div>
        </div>
    )
}
