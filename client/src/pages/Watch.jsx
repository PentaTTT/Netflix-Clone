import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const Watch = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const movie = location.state;

    return (
        <div className='h-screen w-screen bg-black'>
            <nav
                className='
                fixed
                w-full
                p-4
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-70
            '
            >
                <AiOutlineArrowLeft onClick={() => navigate('/')} className='text-white cursor-pointer' size={40} />
                <p className='text-white text-1xl md:text-3xl font-bold'>
                    <span className='font-light'> Watching: </span> {movie.title}
                </p>
            </nav>
            <video
                autoPlay
                controls
                className='h-full w-full'
                src={movie.trailer}
            ></video>
        </div>
    )
}

export default Watch