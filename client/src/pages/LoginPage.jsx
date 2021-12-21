import React, { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'

export const LoginPage = () => {
    const [mode, setMode] = useState('login')

    return <>
        {mode === 'login'
            ? <LoginForm setMode={setMode}/>
            : <RegisterForm setMode={setMode}/>
        }
    </>
}
