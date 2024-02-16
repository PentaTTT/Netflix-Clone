import React from 'react'
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
    const { visible } = props
    if (!visible) {
        return null;
    }

    return (
        <div
            className='
                bg-black
                w-56
                absolute
                top-8
                left-0
                py-5
                flex
                flex-col
                border-2
                border-gray-500
        '>
            <div className='flex flex-col gap-4'>
                <Link to='/' className='text-center text-white hover:underline'>
                    Home
                </Link>
                <Link to='/series' className='text-center text-white hover:underline'>
                    Series
                </Link>
                <Link to='/movies' className='text-center text-white hover:underline'>
                    Films
                </Link>
                <Link className='text-center text-white hover:underline'>
                    New & Popular
                </Link>
                <Link className='text-center text-white hover:underline'>
                    My List
                </Link>
                <Link className='text-center text-white hover:underline'>
                    Browse by Language
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu