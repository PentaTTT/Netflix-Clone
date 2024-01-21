import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
    const nav = useNavigate()

    return (
        <div className='bg-zinc-900 text-center p-5'>
            <h1 className='text-white text-4xl py-2'>404 Not Found!</h1>
            <span className='text-gray-300 hover:border-b-[1px] hover:text-white'
                onClick={() => nav("/")}
            >Back to the HomePage</span>
        </div>

    )
}

export default NoPage