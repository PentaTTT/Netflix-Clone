import React from 'react'

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
                <div className='text-center text-white hover:underline'>
                    Home
                </div>
                <div className='text-center text-white hover:underline'>
                    Series
                </div>
                <div className='text-center text-white hover:underline'>
                    Films
                </div>
                <div className='text-center text-white hover:underline'>
                    New & Popular
                </div>
                <div className='text-center text-white hover:underline'>
                    My List
                </div>
                <div className='text-center text-white hover:underline'>
                    Browse by Language
                </div>
            </div>
        </div>
    )
}

export default MobileMenu