import React, { useState } from 'react'
import './login.scss'
import logo from '../public/images/logo.png'
// import hero from '../public/images/hero.jpg'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/apiRequest'

const Login = ({ isRegister }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        // e.preventDefault();
        const user = {
            email: email,
            password: password
        };
        if (user) {
            return loginUser(user, dispatch, nav)
        }
    }

    return (
        <div className={`
            login
            relative h-full w-full
            bg-no-repeat bg-center bg-fixed bg-cover`}
        >
            <div className="bg-black w-full h-full md:bg-opacity-50">
                <nav className='px-12 py-5'>
                    <img src={logo} alt='Logo'
                        className='h-12'
                    />
                </nav>
                <div className='flex justify-center'>
                    <div className='
                        bg-black bg-opacity-70 
                        px-16 py-16 self-center mt-2
                        lg:w-2/5 lg:max-w-md rounded-md w-4/5
                    '>
                        <h2 className='text-white text-4xl mb-8'>
                            {isRegister ? 'Register' : 'Sign In'}
                        </h2>

                        <div className='flex flex-col gap-4'>
                            {isRegister &&
                                <Input
                                    id={"name"}
                                    type={"text"}
                                    value={name}
                                    onChange={(ev) => setName(ev.target.value)}
                                    label={"Enter Your Name"}
                                />
                            }
                            <Input
                                id={"email"}
                                type={"text"}
                                value={email}
                                onChange={(ev) => setEmail(ev.target.value)}
                                label={"Enter Your Email"}
                            />

                            <Input
                                id={"password"}
                                type={"password"}
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                                label={"Password"}
                            />

                        </div>

                        <button className='
                             bg-red-600 py-3 mt-7 text-white
                             rounded-md w-full hover:bg-red-700
                             transition
                            '
                            onClick={!isRegister ? () => handleLogin() : () => handleRegister()}
                        >
                            {isRegister ? "Sign Up" : "Login"}
                        </button>

                        <p className='text-neutral-500 mt-12'>
                            {isRegister ? "Have an account?" : "New to Netflix?"}
                            <span className='
                                text-white ml-1 
                                hover:underline
                                cursor-pointer'
                                onClick={() => isRegister ? nav('/login') : nav('/register')}
                            >
                                {isRegister ? "Sign in now." : "Sign up now."}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login