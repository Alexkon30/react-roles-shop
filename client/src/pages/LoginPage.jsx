import React, { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'
import '../styles/LoginContainer.css'

export const LoginPage = () => {
    const [mode, setMode] = useState('login')

    return (
    <div className='login-container'>
        {mode === 'login'
            ? <LoginForm setMode={setMode}/>
            : <RegisterForm setMode={setMode}/>
        }
    </div>)
}
