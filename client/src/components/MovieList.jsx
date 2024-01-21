import React, { useEffect, useRef, useState } from 'react'
import { isEmpty } from 'lodash'
import MovieCard from './MovieCard'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MovieList = (props) => {
    const { title, movieData } = props

    const [zIndex, setZIndex] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0)
    const [showControls, setShowControls] = useState(false)

    const listRef = useRef()

    const handleMove = (direction) => {
        if (direction === 'right') {
            listRef.current.style.transform = `translateX(${-100 - sliderPosition}%)`
            setSliderPosition(sliderPosition + 100)
        }
        if (direction === 'left' && sliderPosition > 0) {
            setSliderPosition(sliderPosition - 100)
            listRef.current.style.transform = `translateX(${100 - sliderPosition}%)`
        }
    }

    useEffect(() => {
        if (zIndex) {
            listRef.current.style.zIndex = '30'
        } else {
            listRef.current.style.zIndex = ''
        }
    }, [zIndex])

    if (isEmpty(movieData)) {
        return null
    }
    return (
        // className='px-4 md:px-[3rem] lg:px-[4rem] mt-4 space-y-5'
        <div className='mb-3'>
            <p className='px-[2.5rem] md:px-[2.75rem] lg:px-[3.25rem] py-2 md:py-3
                text-white text-md md:text-xl lg:text-2xl font-semibold'>
                {title}
            </p>

            {/* className='grid grid-cols-3 md:grid-cols-4 gap-2' */}
            <div className='relative flex justify-center'>
                <IoIosArrowBack
                    onClick={() => handleMove('left')}
                    className='w-7 md:w-9 lg:w-11 h-full cursor-pointer
                            text-white bg-zinc-500/75
                            rounded-[5px] opacity-50 hover:opacity-100
                            absolute left-0 top-0 bottom-0 m-auto z-50
                '/>

                <div className='
                                flex items-center
                                w-[calc(100%-4rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-6rem)] 
                                transition ease-in-out duration-[250ms]
                                '
                    ref={listRef}
                    onMouseEnter={() => setZIndex(true)}
                    onMouseLeave={() => setZIndex(false)}
                >
                    {movieData && movieData.length > 0 &&
                        movieData.map((movie, index) => {
                            return (
                                <MovieCard key={index} data={movie} />
                            )
                        })}
                </div>

                <IoIosArrowForward
                    onClick={() => handleMove('right')}
                    className='w-7 md:w-9 lg:w-11 h-full cursor-pointer 
                            text-white bg-zinc-500/75
                            rounded-[5px] opacity-50 hover:opacity-100
                            absolute right-0 top-0 bottom-0 m-auto z-50             
                    ' />
            </div>
        </div>
    )
}

export default MovieList