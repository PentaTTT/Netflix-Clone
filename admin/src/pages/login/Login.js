import React, { useContext, useState } from 'react';
import "./login.css";
import { AuthContext } from "../../context/authContext/AuthContext"
import { login } from '../../context/authContext/apiCall';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch)
    }

    return (
        <div className='login'>
            <form className='login-form'>
                <h2 className='login-title'>Login</h2>
                <input type='text' placeholder='email' className='input-login'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type='password' placeholder='password' className='input-login'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='btn-login'
                    onClick={handleLogin}
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
        </div>
    )
}
