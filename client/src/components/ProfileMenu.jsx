import React from 'react'
import avaProfile from '../public/images/default-blue.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/apiRequest'

const ProfileMenu = (props) => {
    const { visible } = props

    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout(dispatch, nav)
    }
    if (!visible) {
        return null
    }

    return (
        <div className='
            bg-black
            w-56
            absolute
            top-8
            lg:top-14
            right-0
            py-5
            flex
            flex-col
            border-2
            border-gray-500
        '>
            <div className='flex flex-col gap-3'>
                <div className='px-3 flex flex-row gap-3 items-center w-full group/item'>
                    <img className='w-8 rounder-md' src={avaProfile} alt='avatar profile' />
                    <p className='text-white text-sm group-hover/item:underline'>Username</p>
                </div>
                <hr className='bg-gray-600 h-px my-4 border-0' />

                <div className='text-white text-center text-sm hover:underline'
                    onClick={() => handleLogout()}
                >
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu