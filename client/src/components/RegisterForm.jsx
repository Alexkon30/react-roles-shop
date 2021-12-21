import React from 'react'

export const RegisterForm = ({setMode}) => {
    return (
        <div className='form'>
            <h3>Registration</h3>
            <input type="text" placeholder='username'/>
            <input type="text" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input type="password" placeholder='confirm password'/>
            <input type="button" value="to login" onClick={() => setMode('login')}/>
        </div>
    )
}
