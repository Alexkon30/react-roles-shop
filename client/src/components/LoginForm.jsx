import React from 'react'

export const LoginForm = ({setMode}) => {
    return (
        <div className='form'>
            <h3>Login</h3>
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <p>Already have an account? <span className='link' onClick={() => setMode('register')}>Login</span></p>
            {/* <input type="button" value="to register" onClick={() => setMode('register')} /> */}
        </div>
    )
}
